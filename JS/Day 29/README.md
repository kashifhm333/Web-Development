# Day 29 - Advanced DOM Manipulation

## Overview
Create dynamic content by building and modifying the DOM with JavaScript.

## Files in This Project

### 📄 `index.html`
HTML structure for manipulation

### ⚙️ `harry.html`
Additional DOM manipulation examples

## Creating Elements

### createElement
```javascript
let newDiv = document.createElement("div");
let newParagraph = document.createElement("p");
let newButton = document.createElement("button");
```

### Setting Properties
```javascript
let newDiv = document.createElement("div");

// Set content
newDiv.textContent = "Hello, World!";
newDiv.innerHTML = "<h2>Title</h2><p>Content</p>";

// Set attributes
newDiv.id = "myDiv";
newDiv.className = "container active";
newDiv.setAttribute("data-id", "123");

// Set styles
newDiv.style.color = "red";
newDiv.style.fontSize = "18px";

// Set multiple attributes with dataset
newDiv.dataset.id = "123";
newDiv.dataset.name = "John";
```

### Complete Element Creation
```javascript
function createCard(title, description) {
    let card = document.createElement("div");
    card.className = "card";
    
    let titleEl = document.createElement("h3");
    titleEl.textContent = title;
    
    let descEl = document.createElement("p");
    descEl.textContent = description;
    
    card.appendChild(titleEl);
    card.appendChild(descEl);
    
    return card;
}

let card = createCard("My Title", "My description");
```

## Adding Elements to DOM

### appendChild
```javascript
let container = document.getElementById("container");
let newElement = document.createElement("div");

// Add to end
container.appendChild(newElement);
```

### insertBefore
```javascript
let container = document.getElementById("container");
let newElement = document.createElement("div");
let reference = container.firstChild;

// Insert before reference
container.insertBefore(newElement, reference);

// Insert at start
container.insertBefore(newElement, container.firstChild);
```

### insertAdjacentHTML
```javascript
let element = document.getElementById("main");

// Insert before opening tag
element.insertAdjacentHTML("beforebegin", "<p>Before</p>");

// Insert after opening tag
element.insertAdjacentHTML("afterbegin", "<p>After open</p>");

// Insert before closing tag
element.insertAdjacentHTML("beforeend", "<p>Before close</p>");

// Insert after closing tag
element.insertAdjacentHTML("afterend", "<p>After</p>");
```

## Removing Elements

### remove()
```javascript
let element = document.getElementById("unwanted");
element.remove();
```

### removeChild()
```javascript
let parent = document.getElementById("container");
let child = parent.querySelector(".item");
parent.removeChild(child);
```

### Removing All Children
```javascript
let container = document.getElementById("container");
container.innerHTML = "";  // Removes all children

// Or more efficiently
while (container.firstChild) {
    container.removeChild(container.firstChild);
}
```

## Cloning Elements

### cloneNode
```javascript
let original = document.getElementById("template");

// Shallow clone (no children)
let shallow = original.cloneNode(false);

// Deep clone (with children)
let deep = original.cloneNode(true);

// Add cloned element to DOM
document.body.appendChild(deep);
```

## Building Dynamic Lists

### Example: Create Todo List
```javascript
function createTodoList(todos) {
    let ul = document.createElement("ul");
    
    todos.forEach(function(todo) {
        let li = document.createElement("li");
        li.textContent = todo;
        li.className = "todo-item";
        ul.appendChild(li);
    });
    
    return ul;
}

let todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
let todoList = createTodoList(todos);
document.getElementById("container").appendChild(todoList);
```

### Example: Create Cards Grid
```javascript
function createCardGrid(items) {
    let grid = document.createElement("div");
    grid.className = "grid";
    
    items.forEach(item => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <button class="btn-view">View</button>
        `;
        grid.appendChild(card);
    });
    
    return grid;
}

let items = [
    { title: "Item 1", description: "Description 1" },
    { title: "Item 2", description: "Description 2" },
    { title: "Item 3", description: "Description 3" }
];

let grid = createCardGrid(items);
document.body.appendChild(grid);
```

## Dynamic Table Creation

```javascript
function createTable(headers, rows) {
    let table = document.createElement("table");
    
    // Create header
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    
    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create body
    let tbody = document.createElement("tbody");
    
    rows.forEach(row => {
        let tr = document.createElement("tr");
        
        row.forEach(cell => {
            let td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        
        tbody.appendChild(tr);
    });
    
    table.appendChild(tbody);
    return table;
}

let headers = ["Name", "Age", "City"];
let rows = [
    ["John", 30, "New York"],
    ["Jane", 25, "Los Angeles"],
    ["Bob", 35, "Chicago"]
];

let table = createTable(headers, rows);
document.body.appendChild(table);
```

## Template Literals for HTML

```javascript
let user = { name: "Ronaldo", age: 40 };

let html = `
    <div class="user-card">
        <h2>${user.name}</h2>
        <p>Age: ${user.age}</p>
        <button onclick="deleteUser(${user.id})">Delete</button>
    </div>
`;

document.body.innerHTML += html;
```

## Fragment for Efficiency

```javascript
// Create fragment (not in DOM yet)
let fragment = document.createDocumentFragment();

// Add many elements to fragment
for (let i = 0; i < 1000; i++) {
    let li = document.createElement("li");
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

// Add fragment to DOM (single reflow)
document.getElementById("list").appendChild(fragment);
```

## Replacing Elements

```javascript
let oldElement = document.getElementById("old");
let newElement = document.createElement("div");
newElement.textContent = "New content";

// Replace
oldElement.parentNode.replaceChild(newElement, oldElement);

// Or using replaceWith (modern)
oldElement.replaceWith(newElement);
```

## Practical Examples

### Dynamic Form Builder
```javascript
function buildForm(fields) {
    let form = document.createElement("form");
    
    fields.forEach(field => {
        let label = document.createElement("label");
        label.textContent = field.label;
        
        let input = document.createElement("input");
        input.type = field.type;
        input.name = field.name;
        input.placeholder = field.placeholder;
        
        form.appendChild(label);
        form.appendChild(input);
    });
    
    return form;
}

let fields = [
    { label: "Name:", type: "text", name: "name", placeholder: "Enter name" },
    { label: "Email:", type: "email", name: "email", placeholder: "Enter email" },
    { label: "Password:", type: "password", name: "password", placeholder: "Enter password" }
];

let form = buildForm(fields);
document.body.appendChild(form);
```

## Learning Outcomes
✅ Create elements dynamically
✅ Add elements to the DOM
✅ Remove elements from DOM
✅ Clone elements
✅ Build dynamic lists and grids
✅ Use document fragments for efficiency
✅ Use template literals for HTML generation

## Common Mistakes
❌ Not checking if element exists before manipulating
❌ Using innerHTML with user input (security risk)
❌ Adding elements one by one (use fragments)
❌ Not storing created elements for later use
❌ Forgetting to append created elements to DOM

## Best Practices
✅ Use template literals for complex HTML
✅ Use fragments for multiple elements
✅ Cache elements in variables
✅ Test element creation across browsers
✅ Use data attributes for dynamic data
✅ Separate structure, style, and behavior

## Next Steps
→ Move to **Day 30** to learn about event handling

---

*Dynamic DOM manipulation brings interactivity to your websites!* ✨

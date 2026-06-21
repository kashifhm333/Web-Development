# Day 27 - DOM Manipulation Basics

## Overview
Start manipulating the Document Object Model (DOM) - interact with HTML elements using JavaScript.

## Files in This Project

### 📄 `index.html`
HTML structure for DOM manipulation

### 🎨 `style.css`
Styling for the page

### ⚙️ `script.js`
JavaScript for DOM manipulation

## What is the DOM?

The DOM (Document Object Model) is a programming interface that represents your HTML as a tree of objects. JavaScript can manipulate this tree.

```
Document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── header
        ├── main
        │   └── article
        └── footer
```

## Accessing the DOM

### Getting Elements

#### getElementById
```javascript
let element = document.getElementById("myId");
```

#### getElementsByClassName
```javascript
let elements = document.getElementsByClassName("myClass");
// Returns HTMLCollection (live, updates automatically)
```

#### getElementsByTagName
```javascript
let elements = document.getElementsByTagName("p");
// Returns HTMLCollection
```

#### querySelector (Recommended)
```javascript
let element = document.querySelector(".myClass");  // First match
let element = document.querySelector("#myId");
let element = document.querySelector("p.intro");
```

#### querySelectorAll (Recommended)
```javascript
let elements = document.querySelectorAll(".myClass");
// Returns NodeList (static, doesn't update automatically)
```

## Modifying Elements

### Changing Content

#### textContent
```javascript
let element = document.getElementById("content");
element.textContent = "New text";
```

#### innerHTML
```javascript
let element = document.getElementById("content");
element.innerHTML = "<strong>Bold text</strong>";
```

#### innerText
```javascript
element.innerText = "New inner text";
```

### Changing Attributes

```javascript
let link = document.querySelector("a");

// Get attribute
console.log(link.getAttribute("href"));

// Set attribute
link.setAttribute("href", "https://example.com");
link.setAttribute("target", "_blank");

// Remove attribute
link.removeAttribute("disabled");

// Direct access
link.href = "https://example.com";
link.title = "Click here";
```

### Changing Styles

```javascript
let element = document.querySelector(".box");

// Direct style changes
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";
element.style.padding = "10px";

// Multiple styles
element.style.cssText = "color: red; background-color: blue; font-size: 20px;";
```

### Changing Classes

```javascript
let element = document.querySelector(".box");

// Add class
element.classList.add("active");
element.classList.add("highlight", "bold");

// Remove class
element.classList.remove("active");

// Toggle class
element.classList.toggle("active");  // Add if not present, remove if present

// Check class
if (element.classList.contains("active")) {
    console.log("Active!");
}
```

## Creating and Removing Elements

### Creating Elements

```javascript
// Create element
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
newParagraph.classList.add("intro");

// Create and add multiple elements
let container = document.getElementById("container");
let newDiv = document.createElement("div");
newDiv.innerHTML = "<h2>Title</h2><p>Content</p>";
container.appendChild(newDiv);
```

### Appending Elements

```javascript
let container = document.getElementById("container");
let newElement = document.createElement("div");

// Add to end
container.appendChild(newElement);

// Add to specific position
let firstChild = container.firstChild;
container.insertBefore(newElement, firstChild);

// Add as HTML string
container.innerHTML += "<p>New paragraph</p>";
```

### Removing Elements

```javascript
let element = document.getElementById("unwanted");

// Remove element
element.remove();

// Remove from parent
let parent = element.parentNode;
parent.removeChild(element);
```

## Practical DOM Examples

### Toggle Visibility
```javascript
let button = document.getElementById("toggleBtn");
let content = document.getElementById("content");

button.addEventListener("click", function() {
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});
```

### Update Text on Click
```javascript
let button = document.getElementById("updateBtn");
let text = document.getElementById("text");

button.addEventListener("click", function() {
    text.textContent = "Text has been updated!";
    button.style.backgroundColor = "green";
});
```

### Create Dynamic List
```javascript
let items = ["Item 1", "Item 2", "Item 3"];
let list = document.getElementById("list");

items.forEach(function(item) {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});
```

## DOM Navigation

```javascript
let element = document.getElementById("middle");

// Parent
console.log(element.parentNode);
console.log(element.parentElement);

// Children
console.log(element.children);        // HTMLCollection
console.log(element.firstChild);      // Text node or element
console.log(element.lastChild);
console.log(element.firstElementChild);
console.log(element.lastElementChild);

// Siblings
console.log(element.nextSibling);
console.log(element.previousSibling);
console.log(element.nextElementSibling);
console.log(element.previousElementSibling);
```

## Learning Outcomes
✅ Understand the DOM structure
✅ Select elements using various methods
✅ Modify element content and attributes
✅ Change element styles
✅ Add and remove classes
✅ Create and remove elements
✅ Navigate the DOM tree

## Common Mistakes
❌ Confusing innerHTML and textContent
❌ Using old getElementById methods instead of querySelector
❌ Not checking if element exists before manipulating
❌ Forgetting to attach elements to the DOM
❌ Using innerHTML for user input (security risk)

## Best Practices
✅ Use querySelector/querySelectorAll (modern)
✅ Check element exists: `if (element) { ... }`
✅ Use textContent instead of innerHTML for text
✅ Use classList for class manipulation
✅ Cache element references when using multiple times

## Next Steps
→ Move to **Day 28** to learn DOM selection methods in detail

---

*DOM manipulation is how you make web pages interactive!* 🎯

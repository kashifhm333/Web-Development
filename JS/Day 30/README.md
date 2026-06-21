# Day 30 - Event Handling

## Overview
Make your websites interactive by responding to user actions with event listeners.

## Files in This Project

### 📄 `index.html`, `eventBubbling.html`
HTML with event handlers

### 📂 `practice/`
Practice files for event handling

### ⚙️ `script.js`
Event handling demonstrations

## What are Events?

Events are actions or occurrences triggered by user interactions:
- Click
- Double-click
- Hover
- Type
- Submit form
- Load page
- And many more...

## Adding Event Listeners

### addEventListener
```javascript
let button = document.querySelector("button");

// Basic syntax
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// With arrow function
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

// With named function
function handleClick(event) {
    console.log("Button clicked!");
}
button.addEventListener("click", handleClick);
```

### Removing Event Listeners
```javascript
function handleClick() {
    console.log("Clicked!");
}

let button = document.querySelector("button");

// Add listener
button.addEventListener("click", handleClick);

// Remove listener
button.removeEventListener("click", handleClick);
```

## Common Events

### Mouse Events
```javascript
element.addEventListener("click", function(event) {
    console.log("Single click");
});

element.addEventListener("dblclick", function(event) {
    console.log("Double click");
});

element.addEventListener("mouseenter", function(event) {
    console.log("Mouse entered");
});

element.addEventListener("mouseleave", function(event) {
    console.log("Mouse left");
});

element.addEventListener("mouseover", function(event) {
    console.log("Mouse over");
});

element.addEventListener("mouseout", function(event) {
    console.log("Mouse out");
});

element.addEventListener("mousemove", function(event) {
    console.log("Mouse moving");
    console.log("X:", event.clientX, "Y:", event.clientY);
});

element.addEventListener("contextmenu", function(event) {
    event.preventDefault();  // Prevent right-click menu
    console.log("Right clicked");
});
```

### Keyboard Events
```javascript
document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});

document.addEventListener("keyup", function(event) {
    console.log("Key released:", event.key);
});

document.addEventListener("keypress", function(event) {
    console.log("Key pressed:", event.char);
});

// Specific key
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("Enter key pressed");
    }
    if (event.keyCode === 13) {  // Also works with keyCode
        console.log("Enter key pressed");
    }
});
```

### Form Events
```javascript
let form = document.querySelector("form");
let input = document.querySelector("input");

// Form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission
    console.log("Form submitted");
});

// Input change
input.addEventListener("change", function(event) {
    console.log("Input changed:", event.target.value);
});

// Input typing
input.addEventListener("input", function(event) {
    console.log("User typing:", event.target.value);
});

// Focus events
input.addEventListener("focus", function(event) {
    console.log("Input focused");
});

input.addEventListener("blur", function(event) {
    console.log("Input lost focus");
});
```

### Other Events
```javascript
window.addEventListener("load", function() {
    console.log("Page fully loaded");
});

window.addEventListener("scroll", function() {
    console.log("Page scrolled");
    console.log("Scroll position:", window.scrollY);
});

window.addEventListener("resize", function() {
    console.log("Window resized");
    console.log("Width:", window.innerWidth);
});
```

## Event Object

The event object contains information about the event:

```javascript
button.addEventListener("click", function(event) {
    // Event properties
    console.log(event.type);          // "click"
    console.log(event.target);        // The element clicked
    console.log(event.currentTarget); // The element with listener
    console.log(event.timestamp);     // When event occurred
    console.log(event.clientX);       // X coordinate
    console.log(event.clientY);       // Y coordinate
    
    // Event methods
    event.preventDefault();   // Prevent default behavior
    event.stopPropagation();  // Stop event bubbling
});
```

## Event Delegation

Handle events on parent instead of individual children:

```javascript
// Bad - add listener to each item
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", function() {
        this.style.backgroundColor = "blue";
    });
});

// Good - add listener to parent
let container = document.getElementById("container");
container.addEventListener("click", function(event) {
    if (event.target.classList.contains("item")) {
        event.target.style.backgroundColor = "blue";
    }
});
```

## Event Bubbling and Capturing

### Event Bubbling (Default)
```javascript
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

// Bubbles from child to parent
child.addEventListener("click", function(event) {
    console.log("Child clicked");
});

parent.addEventListener("click", function(event) {
    console.log("Parent clicked");  // Also fires when child clicked
});

// Stop bubbling
child.addEventListener("click", function(event) {
    event.stopPropagation();  // Parent listener won't fire
    console.log("Child clicked");
});
```

### Event Capturing
```javascript
element.addEventListener("click", function() {
    console.log("Capturing phase");
}, true);  // true = capture phase
```

## Practical Event Examples

### Toggle Button
```javascript
let toggleBtn = document.getElementById("toggleBtn");
let content = document.getElementById("content");

toggleBtn.addEventListener("click", function() {
    content.classList.toggle("hidden");
});
```

### Form Validation
```javascript
let form = document.querySelector("form");
let emailInput = form.querySelector("input[type='email']");

form.addEventListener("submit", function(event) {
    if (!emailInput.value.includes("@")) {
        event.preventDefault();
        alert("Please enter valid email");
    }
});
```

### Input Search
```javascript
let searchInput = document.getElementById("search");
let results = document.getElementById("results");

searchInput.addEventListener("input", function(event) {
    let query = event.target.value.toLowerCase();
    
    // Filter and display results
    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
```

### Button Click Counter
```javascript
let button = document.querySelector("button");
let counter = document.querySelector(".counter");
let count = 0;

button.addEventListener("click", function() {
    count++;
    counter.textContent = count;
});
```

### Keyboard Shortcut
```javascript
document.addEventListener("keydown", function(event) {
    // Ctrl/Cmd + S to save
    if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        console.log("Save triggered");
    }
});
```

## Learning Outcomes
✅ Add event listeners to elements
✅ Handle different event types
✅ Access event object properties
✅ Prevent default behavior
✅ Stop event propagation
✅ Use event delegation
✅ Create interactive behaviors

## Common Mistakes
❌ Forgetting to prevent default (form submit)
❌ Not removing event listeners (memory leaks)
❌ Using inline HTML event handlers (old practice)
❌ Not understanding event bubbling
❌ Attaching listeners before element exists

## Best Practices
✅ Use addEventListener (modern)
✅ Remove listeners when not needed
✅ Use event delegation for dynamic content
✅ Test across browsers
✅ Use preventDefault() when needed
✅ Clean up on page unload

## Next Steps
→ Move to **Day 31** to learn about Fetch API and HTTP requests

---

*Events are what make web pages interactive and responsive to users!* 🎯

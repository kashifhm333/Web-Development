# Day 28 - DOM Selection Methods

## Overview
Master different ways to select DOM elements - the foundation of DOM manipulation.

## Files in This Project

### 📄 `index.html`
HTML with various elements to select

### ⚙️ `script.js`
Demonstrates all selection methods

## DOM Selection Methods Comparison

### getElementById
```javascript
// Selects element by id
let element = document.getElementById("header");

// Returns: Element or null
// Speed: Very fast
// Modern: Not recommended (use querySelector)
```

### getElementsByClassName
```javascript
// Selects elements by class name
let elements = document.getElementsByClassName("card");

// Returns: HTMLCollection (live)
// Speed: Fast
// Modern: Not recommended (use querySelectorAll)

// Convert to array
let elementArray = Array.from(elements);
let elementArray = [...elements];
```

### getElementsByTagName
```javascript
// Selects elements by tag name
let paragraphs = document.getElementsByTagName("p");

// Returns: HTMLCollection (live)
// Speed: Fast
// Modern: Not recommended (use querySelectorAll)
```

### querySelector (Modern, Recommended)
```javascript
// Selects first element matching CSS selector
let element = document.querySelector(".card");
let element = document.querySelector("#header");
let element = document.querySelector("p.intro");
let element = document.querySelector("div > p");
let element = document.querySelector("[data-id='123']");

// Returns: Element or null
// Speed: Moderate
// Best for: Single element selection
```

### querySelectorAll (Modern, Recommended)
```javascript
// Selects all elements matching CSS selector
let elements = document.querySelectorAll(".card");
let elements = document.querySelectorAll("p");
let elements = document.querySelectorAll("div > p");
let elements = document.querySelectorAll("[data-id]");

// Returns: NodeList (static)
// Speed: Moderate
// Best for: Multiple elements selection
// Can use forEach directly on NodeList
elements.forEach(el => console.log(el));
```

## Advanced Selectors

### Combining Selectors

```javascript
// Multiple classes
document.querySelector(".card.active");

// Tag and class
document.querySelector("div.container");

// Direct child
document.querySelector("body > div");

// Descendant
document.querySelector("div p");

// Sibling
document.querySelector("h1 + p");
```

### Attribute Selectors

```javascript
// Has attribute
document.querySelector("[data-id]");

// Attribute equals
document.querySelector("[data-id='123']");

// Attribute contains
document.querySelector("[class*='card']");

// Attribute starts with
document.querySelector("[data-id^='post']");

// Attribute ends with
document.querySelector("[class$='-active']");
```

### Pseudo-Class Selectors

```javascript
// First child
document.querySelector("li:first-child");

// Last child
document.querySelector("li:last-child");

// Nth child
document.querySelector("li:nth-child(2)");

// Only child
document.querySelector("p:only-child");

// Not selector
document.querySelector("li:not(.completed)");
```

## Practical Selection Examples

### Select by ID
```javascript
let header = document.querySelector("#header");
// or
let header = document.getElementById("header");
```

### Select by Class
```javascript
let cards = document.querySelectorAll(".card");
// Returns NodeList with all .card elements

cards.forEach(card => {
    console.log(card.textContent);
});
```

### Select by Attribute
```javascript
// Find input with specific name
let emailInput = document.querySelector("input[name='email']");

// Find all buttons with data attribute
let buttons = document.querySelectorAll("button[data-action]");
```

### Complex Selection
```javascript
// Find all active cards inside a specific section
let cards = document.querySelectorAll("#main section.active .card");

// Find the first paragraph in a div
let paragraph = document.querySelector("div p");

// Find all direct children
let children = document.querySelectorAll("div > *");
```

### Conditional Selection
```javascript
// Select if element exists
let element = document.querySelector(".modal");
if (element) {
    console.log("Modal found!");
}

// Select with default
let element = document.querySelector(".header") || document.body;
```

## Performance Considerations

### Best: Direct ID Selection
```javascript
let element = document.getElementById("header");
// Fastest - single ID match
```

### Good: querySelector
```javascript
let element = document.querySelector(".card");
// Fast enough for most use cases
```

### Avoid: getElementsBy* (Live Collections)
```javascript
let elements = document.getElementsByClassName("card");
// Updates automatically - can cause performance issues
```

### Avoid: Complex Selectors in Loop
```javascript
// Bad - selector runs every iteration
for (let i = 0; i < 1000; i++) {
    let item = document.querySelector(".item");
}

// Good - selector runs once
let item = document.querySelector(".item");
for (let i = 0; i < 1000; i++) {
    // Use item
}
```

## Scoped Selection

Select within specific elements:

```javascript
// Select in entire document
let element = document.querySelector(".card");

// Select within specific container
let container = document.getElementById("main");
let element = container.querySelector(".card");

// Select all within container
let cards = container.querySelectorAll(".card");
```

## Checking if Element Exists

```javascript
// Method 1: Check directly
let element = document.querySelector(".modal");
if (element) {
    // Element exists
}

// Method 2: Use optional chaining (modern)
document.querySelector(".modal")?.style.display = "none";

// Method 3: Check length (for NodeList/HTMLCollection)
let elements = document.querySelectorAll(".card");
if (elements.length > 0) {
    // Elements exist
}
```

## Common Selection Patterns

### Select Multiple Elements and Loop
```javascript
let items = document.querySelectorAll(".item");
items.forEach(item => {
    console.log(item.textContent);
});
```

### Select and Modify
```javascript
let buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.style.color = "blue";
    btn.addEventListener("click", function() {
        console.log("Clicked!");
    });
});
```

### Conditional Selection and Manipulation
```javascript
let activeCard = document.querySelector(".card.active");
if (activeCard) {
    activeCard.style.border = "2px solid blue";
}
```

### Select Next/Previous Element
```javascript
let current = document.querySelector(".active");
let next = current.nextElementSibling;
let previous = current.previousElementSibling;
```

## NodeList vs HTMLCollection

| Feature | NodeList | HTMLCollection |
|---------|----------|----------------|
| Method | querySelectorAll, childNodes | getElementsBy* |
| Live | Static | Live (updates) |
| forEach | Yes | No (need Array.from) |
| Index access | Yes | Yes |
| Performance | Good | Better (live) |

## Learning Outcomes
✅ Master querySelector and querySelectorAll
✅ Understand CSS selector syntax
✅ Select elements by various criteria
✅ Scope selections to specific containers
✅ Optimize selector performance
✅ Use complex selectors effectively

## Common Mistakes
❌ Using old getElementById instead of querySelector
❌ Forgetting querySelector returns only first match
❌ Using HTMLCollection methods on NodeList
❌ Complex selectors that are hard to maintain
❌ Selecting elements in loops

## Best Practices
✅ Use querySelector/querySelectorAll (modern)
✅ Check if element exists before using
✅ Cache selections used multiple times
✅ Use meaningful class names for selection
✅ Use data attributes for JavaScript selection
✅ Keep selectors simple and readable

## Next Steps
→ Move to **Day 29** to learn advanced DOM manipulation

---

*Effective element selection is the key to efficient DOM manipulation!* 🔍

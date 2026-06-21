# Day 18 - CSS Pseudo-Elements & Pseudo-Classes

## Overview
Master pseudo-elements and pseudo-classes - advanced CSS selectors for styling specific states and creating content.

## File: `index.html`

Demonstrates pseudo-elements and pseudo-classes.

## Pseudo-Classes

Pseudo-classes target elements in specific states or positions.

### User Interaction Pseudo-Classes
```css
/* Hover - when user hovers */
a:hover {
    color: #ff6600;
    text-decoration: underline;
}

/* Active - when being clicked */
button:active {
    transform: scale(0.95);
    background-color: #004d99;
}

/* Focus - when element has focus */
input:focus {
    outline: 2px solid #0066cc;
    box-shadow: 0 0 5px rgba(0, 102, 204, 0.5);
}

/* Visited - for visited links */
a:visited {
    color: #663399;
}
```

### Structural Pseudo-Classes
```css
/* First child */
li:first-child {
    font-weight: bold;
}

/* Last child */
li:last-child {
    border-bottom: none;
}

/* Nth child */
li:nth-child(2) {
    background-color: #f0f0f0;
}

/* Nth child formulas */
li:nth-child(odd) {
    background-color: #ffffff;
}

li:nth-child(even) {
    background-color: #f9f9f9;
}

li:nth-child(3n) {  /* Every 3rd item */
    font-weight: bold;
}

/* Only child */
li:only-child {
    margin: 0;
}

/* First of type */
p:first-of-type {
    margin-top: 0;
}

/* Last of type */
p:last-of-type {
    margin-bottom: 0;
}

/* Nth of type */
p:nth-of-type(2) {
    color: blue;
}
```

### Form Pseudo-Classes
```css
/* Enabled and disabled */
input:enabled {
    background-color: white;
}

input:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
}

/* Checked */
input:checked {
    background-color: #0066cc;
}

/* Valid and invalid */
input:valid {
    border-color: green;
}

input:invalid {
    border-color: red;
}

/* Required and optional */
input:required {
    border: 2px solid orange;
}

input:optional {
    border: 1px solid gray;
}

/* Placeholder shown */
input:placeholder-shown {
    color: #999;
}
```

### State Pseudo-Classes
```css
/* Not - negation */
li:not(.active) {
    opacity: 0.5;
}

/* Empty - no children */
div:empty {
    display: none;
}

/* Root - document root */
:root {
    --primary-color: blue;
}

/* Target - element matching URL */
#section1:target {
    background-color: yellow;
}
```

### Not Pseudo-Class Examples
```css
/* All paragraphs except last */
p:not(:last-child) {
    margin-bottom: 20px;
}

/* All list items except first and last */
li:not(:first-child):not(:last-child) {
    border: 1px solid #ddd;
}

/* All buttons except disabled */
button:not(:disabled) {
    cursor: pointer;
}
```

## Pseudo-Elements

Pseudo-elements create virtual elements and style specific parts of elements.

### Basic Pseudo-Elements
```css
/* Before - insert before content */
p::before {
    content: "→ ";
    color: blue;
}

/* After - insert after content */
p::after {
    content: " ←";
    color: blue;
}

/* First line */
p::first-line {
    font-weight: bold;
    text-transform: uppercase;
}

/* First letter */
p::first-letter {
    font-size: 200%;
    font-weight: bold;
    color: #0066cc;
}
```

### Selection Pseudo-Element
```css
/* Style selected text */
::selection {
    background-color: #0066cc;
    color: white;
}

p::selection {
    background-color: yellow;
}
```

### Placeholder Pseudo-Element
```css
input::placeholder {
    color: #999;
    font-style: italic;
}
```

## Practical Examples

### Navigation Divider with ::after
```css
nav li:not(:last-child)::after {
    content: " | ";
    margin: 0 10px;
    color: #999;
}
```

### Tooltip with ::before and ::after
```css
.tooltip {
    position: relative;
}

.tooltip::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 12px;
    background-color: black;
    color: white;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}

.tooltip:hover::before {
    opacity: 1;
}

.tooltip::after {
    content: "";
    position: absolute;
    bottom: 115%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: black;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}

.tooltip:hover::after {
    opacity: 1;
}
```

### Quote Styling
```css
blockquote::before {
    content: """;
    font-size: 48px;
    color: #ddd;
}

blockquote::after {
    content: """;
    font-size: 48px;
    color: #ddd;
}
```

### Number List Items
```css
ol li::before {
    content: counter(item) ". ";
    counter-increment: item;
    font-weight: bold;
}
```

### Clearfix (Old Method)
```css
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}
```

### Hover Effects
```css
button::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

button:hover::after {
    width: 300px;
    height: 300px;
}
```

## Using attr() to Reference HTML Attributes

```html
<a href="/" class="icon-link" data-label="Home">
    Home
</a>
```

```css
.icon-link::after {
    content: attr(data-label);
    margin-left: 5px;
}
```

## Important Notes

- Use `::` for pseudo-elements (`:` for CSS2 compatibility)
- `::before` and `::after` create virtual elements
- The `content` property is required for `::before` and `::after`
- Set `display` appropriately for `::before` and `::after`

## Learning Outcomes
✅ Use pseudo-classes for element states
✅ Use pseudo-elements for styling parts of content
✅ Create advanced CSS effects
✅ Understand nth-child and nth-of-type
✅ Style form states
✅ Use content generation with ::before and ::after

## Common Pseudo-Classes Reference

| Pseudo-Class | Meaning |
|-------------|---------|
| `:hover` | Mouse over element |
| `:active` | Element being clicked |
| `:focus` | Element has focus |
| `:visited` | Visited link |
| `:first-child` | First child |
| `:last-child` | Last child |
| `:nth-child(n)` | Nth child |
| `:nth-of-type(n)` | Nth of type |
| `:not(selector)` | Not matching selector |
| `:enabled` | Enabled form element |
| `:disabled` | Disabled form element |
| `:checked` | Checked checkbox/radio |

## Common Pseudo-Elements Reference

| Pseudo-Element | Purpose |
|---------------|---------|
| `::before` | Insert before content |
| `::after` | Insert after content |
| `::first-line` | First line of text |
| `::first-letter` | First letter of text |
| `::selection` | Selected text |
| `::placeholder` | Placeholder text |

## Next Steps
→ Move to **Day 19** to learn about Flexbox layout

---

*Pseudo-classes and pseudo-elements are powerful tools for advanced CSS styling!* 🎯

# Day 8 - CSS Fundamentals & Selectors

## Overview
Begin your CSS journey! Learn the three ways to add styling to HTML and master CSS selectors.

## Files in This Project

### 📄 `index.html`
- Demonstrates three methods of applying CSS
- Contains examples of different selector types

### 🎨 `style.css`
- External stylesheet
- Best practice for organizing styles

## Three Ways to Apply CSS

### 1. Inline CSS
```html
<p style="color: red; font-size: 20px;">Styled paragraph</p>
```
- **Pros**: Quick for testing
- **Cons**: Not reusable, hard to maintain, mixes content and styling
- **Use**: Only for quick debugging

### 2. Internal CSS (Style Tag)
```html
<head>
    <style>
        p { color: blue; }
        .header { font-size: 24px; }
    </style>
</head>
```
- **Pros**: All styles in one place
- **Cons**: Styles only for this page, mixes content and styling
- **Use**: Small projects or single-page websites

### 3. External CSS (Best Practice)
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```
```css
/* In style.css */
p { color: green; }
.header { font-size: 24px; }
```
- **Pros**: Reusable across pages, clean separation of concerns
- **Cons**: Requires extra file request
- **Use**: Professional projects, recommended always

## CSS Selectors

### Element Selector
```css
p { color: red; }
h1 { font-size: 32px; }
body { background-color: #f0f0f0; }
```
Targets all elements of that type.

### Class Selector
```css
.button { background-color: blue; padding: 10px; }
.highlight { background-color: yellow; }
```
In HTML: `<button class="button">Click me</button>`
- Start with `.`
- Can use on multiple elements
- Can apply multiple classes: `<div class="button highlight">`

### ID Selector
```css
#header { background-color: navy; color: white; }
#footer { margin-top: 50px; }
```
In HTML: `<div id="header">Header</div>`
- Start with `#`
- Each ID should be unique
- More specific than class

### Attribute Selector
```css
input[type="text"] { border: 1px solid gray; }
a[href^="https"] { color: green; }
img[alt] { border: 2px solid blue; }
```
- `[attribute]` - has attribute
- `[attribute="value"]` - attribute equals value
- `[attribute^="value"]` - starts with
- `[attribute$="value"]` - ends with
- `[attribute*="value"]` - contains

### Pseudo-class Selector
```css
a:hover { color: orange; }
button:active { transform: scale(0.95); }
input:focus { outline: 2px solid blue; }
li:first-child { font-weight: bold; }
li:last-child { margin-bottom: 0; }
p:nth-child(2) { color: red; }
```
- `:hover` - when user hovers
- `:active` - when being clicked
- `:focus` - when element has focus
- `:first-child` - first child element
- `:last-child` - last child element
- `:nth-child(n)` - nth child

### Pseudo-element Selector
```css
p::first-line { font-weight: bold; }
p::first-letter { font-size: 150%; }
p::before { content: "→ "; }
p::after { content: " ←"; }
```
- `::first-line` - first line of text
- `::first-letter` - first letter
- `::before` - insert before content
- `::after` - insert after content

### Combinators
```css
/* Descendant selector */
div p { color: red; }  /* All <p> inside <div> */

/* Child selector */
div > p { color: blue; }  /* Direct <p> children of <div> */

/* Adjacent sibling */
h1 + p { margin-top: 0; }  /* <p> immediately after <h1> */

/* General sibling */
h1 ~ p { color: gray; }  /* All <p> that follow <h1> */
```

## Selector Specificity (Most Important!)

### Specificity Calculation
```
Inline styles:     1000
IDs:               0100
Classes/Attributes: 0010
Elements:          0001
```

### Examples
```css
p { color: red; }              /* Specificity: 0001 */
.button { color: blue; }       /* Specificity: 0010 */
#header { color: green; }      /* Specificity: 0100 */
<p style="color: yellow;">    /* Specificity: 1000 */
```

Higher specificity wins! This is why inline styles override everything.

## Learning Outcomes
✅ Understand three ways to apply CSS
✅ Master element, class, and ID selectors
✅ Use attribute and pseudo-class selectors
✅ Understand CSS specificity
✅ Apply styles correctly
✅ Use external stylesheets (best practice)

## Best Practices
✅ Always use external stylesheets for production
✅ Use classes for reusable styles
✅ Use IDs only for unique elements
✅ Avoid overly specific selectors
✅ Keep CSS organized and maintainable
✅ Avoid inline styles in production

## Common Mistakes
❌ Relying too much on inline styles
❌ Using IDs for everything
❌ Overly specific selectors
❌ Not understanding specificity
❌ Mixing inline, internal, and external CSS without organization

## Next Steps
→ Move to **Day 9** to learn about the CSS Box Model

---

*CSS selectors are like CSS's grammar - master them and you can style anything!* 🎨

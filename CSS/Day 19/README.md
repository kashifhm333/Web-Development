# Day 19 - Flexbox Layout

## Overview
Master Flexbox - a modern, powerful layout system for creating flexible, responsive designs.

## File: `index.html`

Demonstrates Flexbox layout with various configurations.

## What is Flexbox?

Flexbox (Flexible Box Layout) is a 1D layout method for arranging items in rows or columns. It's perfect for:
- Navigation menus
- Card layouts
- Centering content
- Equal-width columns

## Flex Container & Items

```html
<div class="container">  <!-- Flex Container -->
    <div class="item">Item 1</div>  <!-- Flex Items -->
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

```css
.container {
    display: flex;  /* Creates flex container */
}
```

## Main Flexbox Properties

### Display: Flex
```css
.container {
    display: flex;    /* Block-level flex container */
    display: inline-flex;  /* Inline-level flex container */
}
```

### Flex Direction
```css
.container {
    flex-direction: row;           /* Left to right (default) */
    flex-direction: row-reverse;   /* Right to left */
    flex-direction: column;        /* Top to bottom */
    flex-direction: column-reverse; /* Bottom to top */
}
```

### Justify Content (Main Axis)
Aligns items along the main axis (horizontal by default):

```css
.container {
    justify-content: flex-start;     /* Align to start (default) */
    justify-content: flex-end;       /* Align to end */
    justify-content: center;         /* Center items */
    justify-content: space-between;  /* Space between items */
    justify-content: space-around;   /* Space around items */
    justify-content: space-evenly;   /* Equal space everywhere */
}
```

### Align Items (Cross Axis)
Aligns items along the cross axis (vertical by default):

```css
.container {
    align-items: flex-start;     /* Align to start */
    align-items: flex-end;       /* Align to end */
    align-items: center;         /* Center items */
    align-items: stretch;        /* Stretch to fill (default) */
    align-items: baseline;       /* Align to baseline */
    
    height: 200px;  /* Need height for vertical alignment */
}
```

### Flex Wrap
```css
.container {
    flex-wrap: nowrap;      /* All items in one line (default) */
    flex-wrap: wrap;        /* Wrap to multiple lines */
    flex-wrap: wrap-reverse; /* Wrap in reverse */
}
```

### Gap (Spacing Between Items)
```css
.container {
    gap: 20px;              /* Space between all items */
    gap: 20px 30px;         /* Row gap, Column gap */
    row-gap: 20px;
    column-gap: 30px;
}
```

### Align Content (Multi-line)
When flex-wrap: wrap creates multiple lines:

```css
.container {
    flex-wrap: wrap;
    align-content: flex-start;     /* Align lines to start */
    align-content: flex-end;       /* Align lines to end */
    align-content: center;         /* Center lines */
    align-content: space-between;  /* Space between lines */
    align-content: space-around;   /* Space around lines */
    align-content: stretch;        /* Stretch lines (default) */
    
    height: 400px;  /* Need height */
}
```

## Flex Item Properties

### Flex (Shorthand)
```css
.item {
    flex: 1;  /* Shorthand: grow shrink basis */
}

/* Equivalent to: */
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
```

### Flex Grow
How much item grows relative to others:

```css
.item {
    flex-grow: 1;  /* Equal growth */
}

.item:first-child {
    flex-grow: 2;  /* Grows twice as much */
}
```

### Flex Shrink
How much item shrinks:

```css
.item {
    flex-shrink: 1;  /* Will shrink (default) */
}

.item.no-shrink {
    flex-shrink: 0;  /* Won't shrink */
}
```

### Flex Basis
Initial size before growing/shrinking:

```css
.item {
    flex-basis: 200px;  /* Start at 200px */
}

.item {
    flex-basis: 25%;    /* Start at 25% of container */
}
```

### Align Self
Override align-items for individual item:

```css
.item {
    align-self: flex-start;   /* Override align-items */
    align-self: center;
    align-self: flex-end;
}
```

### Order
Change visual order without changing HTML:

```css
.item:first-child {
    order: 2;  /* Display second */
}

.item:last-child {
    order: 1;  /* Display first */
}
```

## Practical Flexbox Examples

### Center Content (Both Axes)
```css
.container {
    display: flex;
    justify-content: center;  /* Horizontal center */
    align-items: center;      /* Vertical center */
    height: 300px;
}
```

### Navigation Menu
```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background-color: #333;
}

nav a {
    color: white;
    text-decoration: none;
    flex: 1;
    text-align: center;
}
```

### Equal Width Columns
```css
.grid {
    display: flex;
    gap: 20px;
}

.column {
    flex: 1;  /* All columns same width */
    background: white;
    padding: 20px;
    border-radius: 8px;
}
```

### Flexible Columns (Responsive)
```css
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 250px;  /* grow, shrink, basis */
    /* Grows to fill space, shrinks if needed, minimum 250px */
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### Sidebar + Main Content
```css
.container {
    display: flex;
    gap: 20px;
    height: 100vh;
}

.sidebar {
    flex: 0 0 250px;  /* Fixed 250px width */
    background: #f5f5f5;
    padding: 20px;
}

.main {
    flex: 1;  /* Take remaining space */
    padding: 20px;
}
```

### Sticky Footer
```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    flex: 0 0 auto;  /* Don't grow or shrink */
}

main {
    flex: 1;  /* Grow to fill space */
}

footer {
    flex: 0 0 auto;  /* Don't grow or shrink */
}
```

### Form Layout
```css
.form-group {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 15px;
}

label {
    flex: 0 0 100px;  /* Fixed 100px width */
}

input {
    flex: 1;  /* Grow to fill remaining space */
}
```

## Flexbox vs Grid

| Feature | Flexbox | Grid |
|---------|---------|------|
| Dimensions | 1D (row or column) | 2D (rows and columns) |
| Best For | Navigation, components | Page layouts |
| Alignment | Along axis | Both axes |
| Content | Item-based | Layout-based |

## Learning Outcomes
✅ Understand flex container and flex items
✅ Master justify-content and align-items
✅ Use flex-direction for layout direction
✅ Implement flex grow, shrink, basis
✅ Create responsive layouts
✅ Combine flexbox with other CSS properties

## Common Mistakes
❌ Not setting height for vertical centering
❌ Using flex on inline elements
❌ Confusing justify-content and align-items
❌ Not using flex-wrap for responsive design
❌ Overcomplicating with flex values

## Best Practices
✅ Use flex for component layouts
✅ Combine with gap for spacing
✅ Use flex shorthand (flex: 1)
✅ Test across browsers
✅ Use flexbox + media queries for responsiveness

## Browser Support
- All modern browsers
- IE 11: Partial support (use prefix)

## Next Steps
→ Move to **Day 20** to learn advanced Flexbox

---

*Flexbox is the go-to layout method for modern responsive design!* 📐

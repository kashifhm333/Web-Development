# Day 20 - Advanced Flexbox

## Overview
Continue mastering Flexbox with advanced properties like flex-wrap, align-content, and complex layout patterns.

## File: `index.html`

Demonstrates advanced Flexbox techniques and multi-line flex containers.

## Advanced Flexbox Properties

### Flex Wrap (Creating Multiple Lines)
When items don't fit on one line:

```css
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

Without flex-wrap (default):
- Items shrink to fit one line

With flex-wrap: wrap:
- Items wrap to next line if needed
- More space for each item

### Flex Flow (Shorthand)
Combines flex-direction and flex-wrap:

```css
.container {
    flex-flow: row wrap;
    /* Same as: */
    flex-direction: row;
    flex-wrap: wrap;
}

.container {
    flex-flow: column wrap-reverse;
}
```

### Align Content (Multi-line Distribution)
Distributes lines when there's extra space:

```css
.container {
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    align-content: flex-start;     /* Lines at top */
    align-content: flex-end;       /* Lines at bottom */
    align-content: center;         /* Lines centered */
    align-content: space-between;  /* Space between lines */
    align-content: space-around;   /* Space around lines */
    align-content: space-evenly;   /* Equal space everywhere */
    align-content: stretch;        /* Stretch lines to fill */
}
```

## Complex Layout Patterns

### Multi-Column Grid (Responsive)
```css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 calc(33.333% - 20px);  /* 3 columns */
    min-width: 250px;
}

@media (max-width: 1024px) {
    .card {
        flex: 1 1 calc(50% - 20px);  /* 2 columns */
    }
}

@media (max-width: 768px) {
    .card {
        flex: 1 1 100%;  /* 1 column */
    }
}
```

### Dashboard Layout
```css
.dashboard {
    display: flex;
    gap: 20px;
    height: 100vh;
}

.sidebar {
    flex: 0 0 250px;
    background: #333;
    color: white;
}

.main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.header {
    flex: 0 0 60px;
    background: #f5f5f5;
    border-bottom: 1px solid #ddd;
}

.content {
    flex: 1;
    overflow-y: auto;
}

.footer {
    flex: 0 0 40px;
    background: #333;
    color: white;
}
```

### Product Card Grid
```css
.products {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-content: flex-start;
}

.product {
    flex: 1 1 calc(25% - 30px);
    min-width: 200px;
}

.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.product-info {
    padding: 15px;
}
```

### Navbar with Logo and Menu
```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background: #333;
}

.logo {
    flex: 0 0 auto;
    color: white;
    font-weight: bold;
}

.menu {
    display: flex;
    gap: 20px;
    flex: 1 1 auto;
    justify-content: center;
}

.actions {
    flex: 0 0 auto;
    display: flex;
    gap: 10px;
}
```

### Flex Growing Items
```css
.container {
    display: flex;
    gap: 10px;
}

.button {
    padding: 10px 20px;
}

.button.primary {
    flex: 1;  /* Take remaining space */
}

.button.secondary {
    flex: 0 0 auto;  /* Only needed space */
}
```

### Centering Everything
```css
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background: white;
    padding: 30px;
    border-radius: 8px;
    max-width: 500px;
}
```

## Flexbox Debugging

### Visual Guide Properties
```css
.container {
    display: flex;
    border: 2px solid red;  /* See container */
}

.item {
    border: 2px solid blue;  /* See items */
    flex: 1;
}
```

### Use Browser DevTools
- Right-click element → Inspect
- Hover over flex item
- See flex properties visualization
- Experiment with values

## Common Layout Challenges

### Equal Height Columns
```css
.container {
    display: flex;
    gap: 20px;
    align-items: stretch;  /* Default - stretches to height */
}

.column {
    flex: 1;
    /* Automatically same height */
}
```

### Minimum Item Width
```css
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.item {
    flex: 1 1 200px;  /* Never smaller than 200px */
    background: white;
}
```

### Scrollable Content with Fixed Header
```css
.container {
    display: flex;
    flex-direction: column;
    height: 300px;
}

.header {
    flex: 0 0 auto;
    background: #333;
    color: white;
    padding: 10px;
}

.content {
    flex: 1;
    overflow-y: auto;
}
```

### Inline Flex Items
```css
.container {
    display: inline-flex;
    gap: 10px;
    background: #f5f5f5;
    padding: 10px;
}

.item {
    flex: 0 0 auto;
}
```

## Performance Tips
- Flexbox is performant for modern browsers
- Avoid deep nesting
- Use flex-basis instead of width when possible
- Test on actual devices

## Browser Support
- All modern browsers (Chrome, Firefox, Safari, Edge)
- IE 11: Limited support
- Always test in target browsers

## Learning Outcomes
✅ Use flex-wrap for multi-line layouts
✅ Master align-content for line distribution
✅ Create complex responsive layouts
✅ Combine flex properties effectively
✅ Build real-world layout patterns
✅ Debug flexbox layouts

## Common Mistakes
❌ Forgetting gap spacing in calculations
❌ Not using min-width with flex-wrap
❌ Confusing flex properties
❌ Not testing responsive behavior
❌ Overusing justify-content with flex items

## Best Practices
✅ Use flex shorthand: `flex: 1 1 200px`
✅ Combine with media queries for responsiveness
✅ Use gap for consistent spacing
✅ Test on real devices and browsers
✅ Document complex flex layouts

## Next Steps
→ Move to **Day 21** to learn about CSS Grid layout

---

*Advanced Flexbox patterns create powerful, responsive layouts!* 💪

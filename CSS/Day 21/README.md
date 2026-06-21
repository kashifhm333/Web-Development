# Day 21 - CSS Grid Layout

## Overview
Master CSS Grid - a powerful 2D layout system for complex page layouts.

## Files in This Project

### 📄 Multiple HTML files
- `Grid-1.html`, `Grid-2.html`, `grid-test.html`, `grid-test-2.html`
- Various tests and examples of grid layouts

## What is CSS Grid?

CSS Grid is a 2D layout system for arranging items in rows AND columns. Perfect for:
- Page layouts
- Dashboard layouts
- Complex designs
- Product grids

## Grid Container & Items

```html
<div class="grid">           <!-- Grid Container -->
    <div class="item">1</div> <!-- Grid Items -->
    <div class="item">2</div>
    <div class="item">3</div>
</div>
```

```css
.grid {
    display: grid;  /* Create grid container */
}
```

## Grid Structure Properties

### Grid Template Columns
Define column sizes:

```css
.grid {
    grid-template-columns: 200px 300px 200px;  /* 3 fixed columns */
    grid-template-columns: 1fr 1fr 1fr;        /* 3 equal columns */
    grid-template-columns: 1fr 2fr 1fr;        /* Ratio-based */
    grid-template-columns: repeat(3, 1fr);     /* Same as above */
    grid-template-columns: auto 1fr auto;      /* Auto + flexible */
    grid-template-columns: minmax(200px, 1fr) 1fr minmax(200px, 1fr);
}
```

### Grid Template Rows
Define row sizes:

```css
.grid {
    grid-template-rows: 100px auto 100px;
    grid-auto-rows: 150px;  /* Implicit rows height */
}
```

### Fr Unit (Fraction)
`1fr` = 1 fraction of available space

```css
.grid {
    grid-template-columns: 1fr 2fr 1fr;
    /* Column 2 is twice as wide as columns 1 and 3 */
}
```

### Gap
Space between grid items:

```css
.grid {
    gap: 20px;                /* All gaps */
    gap: 20px 30px;          /* Row gap, Column gap */
    row-gap: 20px;
    column-gap: 30px;
}
```

## Placing Items

### Grid Column
Specify column spanning:

```css
.item {
    grid-column: 1;          /* Column 1 */
    grid-column: 1 / 3;      /* Span from 1 to 3 (columns 1-2) */
    grid-column: 1 / span 2;  /* Start at 1, span 2 columns */
    grid-column: span 3;     /* Span 3 columns */
}
```

### Grid Row
Specify row spanning:

```css
.item {
    grid-row: 1;             /* Row 1 */
    grid-row: 1 / 3;         /* Span rows 1-2 */
    grid-row: 1 / span 2;    /* Start at 1, span 2 rows */
}
```

### Grid Area (Shorthand)
```css
.item {
    grid-area: 1 / 1 / 3 / 3;  /* row-start / column-start / row-end / column-end */
}
```

## Grid Template Areas

Name and layout grid areas:

```css
.grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 60px 1fr 40px;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    gap: 20px;
}

.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.main {
    grid-area: main;
}

.aside {
    grid-area: aside;
}

.footer {
    grid-area: footer;
}
```

## Alignment Properties

### Justify Items (Horizontal)
```css
.grid {
    justify-items: start;      /* Align to start */
    justify-items: end;        /* Align to end */
    justify-items: center;     /* Center */
    justify-items: stretch;    /* Stretch (default) */
}
```

### Align Items (Vertical)
```css
.grid {
    align-items: start;
    align-items: end;
    align-items: center;
    align-items: stretch;
}
```

### Individual Item Alignment
```css
.item {
    justify-self: center;
    align-self: center;
}
```

## Practical Grid Examples

### Dashboard Layout
```css
.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 60px 1fr 40px;
    gap: 20px;
    height: 100vh;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}

.header {
    grid-area: header;
    background: #333;
    color: white;
}

.sidebar {
    grid-area: sidebar;
    background: #f5f5f5;
}

.main {
    grid-area: main;
    background: white;
    overflow-y: auto;
}

.footer {
    grid-area: footer;
    background: #333;
}
```

### Responsive Grid (No Media Query!)
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

### Masonry-like Layout
```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.featured {
    grid-column: 1 / 3;  /* Span 2 columns */
    grid-row: 1 / 3;     /* Span 2 rows */
}
```

### Portfolio Grid
```css
.portfolio {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.project {
    grid-column: span 1;
}

.project.large {
    grid-column: span 2;
    grid-row: span 2;
}
```

### Pricing Table
```css
.pricing {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.pricing-card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
}

.pricing-card.featured {
    grid-row: 1 / 3;
    transform: scale(1.05);
}
```

## Auto-Fit vs Auto-Fill

```css
/* auto-fit - collapses empty tracks */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

/* auto-fill - keeps empty tracks */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
```

## Subgrid (Advanced)
```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
}

.item {
    display: grid;
    grid-template-columns: subgrid;  /* Inherit parent grid */
}
```

## Learning Outcomes
✅ Understand grid containers and items
✅ Define grid columns and rows
✅ Place items using grid properties
✅ Use grid areas for layout
✅ Create responsive grids
✅ Combine grid and flexbox

## Grid vs Flexbox

| Feature | Grid | Flexbox |
|---------|------|---------|
| Dimensions | 2D | 1D |
| Use | Page layouts | Component layouts |
| Alignment | Both axes | Main axis |
| Item placement | Explicit | Automatic |

## Learning Outcomes (Continued)
✅ Master grid template columns and rows
✅ Create responsive grid layouts
✅ Use auto-fit and auto-fill
✅ Align items in grid
✅ Create complex page layouts

## Common Mistakes
❌ Using grid for everything (flexbox better for components)
❌ Complex grid syntax without understanding
❌ Not testing responsive behavior
❌ Mixing grid with floats

## Best Practices
✅ Use grid for page layouts
✅ Use flexbox for components
✅ Test responsiveness
✅ Combine with media queries if needed
✅ Use named grid areas for clarity

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE 11: Not supported

## Next Steps
→ Move to **Day 22** to learn about CSS transitions and transforms

---

*CSS Grid is perfect for creating complex, responsive page layouts!* 🎯

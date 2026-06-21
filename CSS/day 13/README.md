# Day 13 - Navigation Menus & List Styling

## Overview
Learn to create professional navigation menus and style lists effectively.

## Files in This Project

### 📄 `index.html` & `real.html`
- Demonstrate navigation menu patterns
- Show styled lists and inline-block display

## Navigation Menu

### Basic Navigation Structure
```html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
```

### Horizontal Navigation Menu CSS
```css
nav ul {
    list-style: none;           /* Remove bullet points */
    padding: 0;
    margin: 0;
    display: flex;              /* Or use inline-block */
}

nav li {
    margin: 0 20px;
}

nav a {
    text-decoration: none;
    color: #333;
    padding: 10px 15px;
    display: block;
}

nav a:hover {
    color: #0066cc;
    background-color: #f0f0f0;
}
```

## List Styling

### Remove Default List Styling
```css
ul, ol {
    list-style: none;           /* Remove bullets/numbers */
    padding: 0;                 /* Remove default padding */
    margin: 0;                  /* Remove default margin */
}
```

### Custom Bullet Points
```css
ul {
    list-style-type: disc;      /* ● (filled circle) */
    list-style-image: url('bullet.png');  /* Custom image */
}

/* Bullet types */
list-style-type: circle;        /* ○ (empty circle) */
list-style-type: square;        /* ▪ (square) */
list-style-type: decimal;       /* 1, 2, 3... (numbers) */
list-style-type: lower-alpha;   /* a, b, c... */
list-style-type: upper-alpha;   /* A, B, C... */
list-style-type: lower-roman;   /* i, ii, iii... */
list-style-type: upper-roman;   /* I, II, III... */
```

### Styled List Example
```css
.menu-list {
    list-style: none;
    padding: 0;
}

.menu-list li {
    padding: 12px;
    border-bottom: 1px solid #eee;
}

.menu-list li:hover {
    background-color: #f9f9f9;
}

.menu-list a {
    text-decoration: none;
    color: #0066cc;
}

.menu-list a:hover {
    text-decoration: underline;
}
```

## Display Properties

### Display: Inline
```css
span, a {
    display: inline;
    /* Sit on same line, ignore width/height */
}
```

### Display: Block
```css
div, p {
    display: block;
    /* Take full width, new line */
}
```

### Display: Inline-Block (For Navigation)
```css
nav li {
    display: inline-block;
    /* Sit on same line, but respect width/height */
    width: 150px;
    padding: 10px;
}
```

### Display: Flex (Modern Approach)
```css
nav ul {
    display: flex;              /* Modern, flexible */
    gap: 20px;                  /* Space between items */
    justify-content: center;    /* Center items */
}

nav li {
    flex: 1;                    /* Equal width */
}
```

## Navigation Menu Patterns

### Horizontal Menu
```css
nav {
    background-color: #333;
    padding: 0 20px;
}

nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

nav li {
    margin: 0 20px;
}

nav a {
    display: block;
    padding: 15px 0;
    color: white;
    text-decoration: none;
}

nav a:hover {
    color: #0066cc;
    border-bottom: 2px solid #0066cc;
}
```

### Vertical Menu (Sidebar)
```css
nav {
    width: 200px;
    background-color: #f5f5f5;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav li {
    border-bottom: 1px solid #ddd;
}

nav a {
    display: block;
    padding: 15px 20px;
    color: #333;
    text-decoration: none;
}

nav a:hover {
    background-color: #0066cc;
    color: white;
}
```

### Dropdown Menu
```css
nav > ul {
    display: flex;
}

nav > ul > li {
    position: relative;
}

/* Submenu */
nav ul ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    list-style: none;
    padding: 0;
    min-width: 200px;
}

nav li:hover > ul {
    display: block;
}

nav ul ul li {
    border-bottom: 1px solid #eee;
}

nav ul ul a {
    padding: 12px 20px;
}
```

## List Item Spacing
```css
li {
    padding: 10px;
    margin-bottom: 5px;
}

/* Remove margin from last item */
li:last-child {
    margin-bottom: 0;
}
```

## Learning Outcomes
✅ Create horizontal and vertical navigation menus
✅ Style lists effectively
✅ Understand display properties (inline, block, inline-block)
✅ Implement dropdown menus
✅ Use flexbox for navigation

## Common Mistakes
❌ Forgetting to remove default list styling
❌ Not using semantic `<nav>` tag
❌ Poor hover states
❌ Cluttered menu design
❌ Not responsive navigation

## Best Practices
✅ Use semantic `<nav>` tag
✅ Make links large enough to click (44px minimum)
✅ Add clear hover states
✅ Remove default bullet points
✅ Test keyboard navigation (Tab key)
✅ Ensure mobile responsiveness

## Accessibility Considerations
✅ Use keyboard navigation (Tab, Enter)
✅ Sufficient color contrast
✅ Clear focus states
✅ Proper semantic HTML

## Next Steps
→ Move to **Day 14** to learn about CSS overflow properties

---

*Good navigation is essential for user experience - make it clear and accessible!* 🧭

# Day 17 - Responsive Design & Media Queries

## Overview
Master responsive design - make your websites look great on all device sizes using media queries.

## Files in This Project

### 📄 `index.html`, `media.html`, `testing.html`
- Demonstrate responsive design techniques
- Show media queries for different screen sizes

## What is Responsive Design?

Responsive design means your website adapts to different screen sizes:
- Mobile phones (320px - 768px)
- Tablets (768px - 1024px)
- Desktops (1024px+)

## Mobile-First Approach

Design for mobile first, then enhance for larger screens:

```css
/* Mobile (default) */
body {
    font-size: 14px;
    width: 100%;
    padding: 10px;
}

.container {
    width: 100%;
}

/* Tablet and larger */
@media (min-width: 768px) {
    body {
        font-size: 16px;
        padding: 20px;
    }
    
    .container {
        width: 90%;
        max-width: 720px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    body {
        font-size: 16px;
    }
    
    .container {
        width: 85%;
        max-width: 1200px;
    }
}
```

## Media Query Syntax

### Basic Media Query
```css
@media (max-width: 768px) {
    /* Styles applied when viewport is 768px or smaller */
}
```

### Media Query Operators
```css
/* AND - All conditions must be true */
@media (min-width: 768px) and (max-width: 1024px) {
}

/* OR - Any condition can be true */
@media (max-width: 480px), (min-width: 1200px) {
}

/* NOT - Negates condition */
@media not (max-width: 768px) {
}
```

## Common Breakpoints

```css
/* Extra small devices (phones) */
@media (max-width: 480px) {
}

/* Small devices (landscape phones, tablets) */
@media (max-width: 768px) {
}

/* Medium devices (tablets) */
@media (min-width: 768px) and (max-width: 1024px) {
}

/* Large devices (desktops) */
@media (min-width: 1024px) {
}

/* Extra large devices (large desktops) */
@media (min-width: 1200px) {
}
```

## Practical Media Query Examples

### Responsive Grid
```css
/* Mobile - 1 column */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

/* Tablet - 2 columns */
@media (min-width: 768px) {
    .grid {
        grid-template-columns: 1fr 1fr;
    }
}

/* Desktop - 3 columns */
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
```

### Responsive Navigation
```css
/* Mobile - Hamburger menu */
nav ul {
    display: none;
}

.hamburger {
    display: block;
}

/* Desktop - Horizontal menu */
@media (min-width: 1024px) {
    nav ul {
        display: flex;
    }
    
    .hamburger {
        display: none;
    }
}
```

### Responsive Font Sizes
```css
/* Mobile */
h1 {
    font-size: 24px;
}

p {
    font-size: 14px;
}

/* Tablet */
@media (min-width: 768px) {
    h1 {
        font-size: 32px;
    }
    
    p {
        font-size: 16px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    h1 {
        font-size: 48px;
    }
}
```

### Responsive Images
```css
img {
    max-width: 100%;
    height: auto;
}

/* Desktop - Side by side */
@media (min-width: 768px) {
    .images {
        display: flex;
        gap: 20px;
    }
    
    .images img {
        width: 50%;
    }
}
```

## Media Query Features

### Screen Size
```css
@media (min-width: 768px) { }
@media (max-width: 768px) { }
@media (width: 768px) { }
```

### Orientation
```css
/* Portrait orientation */
@media (orientation: portrait) { }

/* Landscape orientation */
@media (orientation: landscape) { }
```

### Device Type
```css
/* Screen devices */
@media screen { }

/* Print */
@media print { }

/* Speech (screen readers) */
@media speech { }
```

### Color Scheme
```css
/* Light mode */
@media (prefers-color-scheme: light) { }

/* Dark mode */
@media (prefers-color-scheme: dark) { }
```

### Reduced Motion
```css
/* User prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none;
        transition: none;
    }
}
```

## Essential Meta Tag

Add to HTML head for proper responsive behavior:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Responsive Layout Example

```css
:root {
    --mobile: 480px;
    --tablet: 768px;
    --desktop: 1024px;
}

/* Mobile first */
.container {
    width: 100%;
    padding: 20px;
}

.sidebar {
    display: none;
}

.content {
    width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 30px;
    }
    
    .sidebar {
        display: block;
    }
    
    .content {
        width: auto;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

## Testing Responsive Design

### Browser DevTools
- Press F12 to open DevTools
- Click device icon to toggle device mode
- Test different screen sizes
- Test different devices (iPhone, iPad, etc.)

### Online Tools
- ResponsiveDesignChecker.com
- Screenfly.org
- BrowserStack.com

## Performance Tips
- Mobile-first = progressive enhancement
- Avoid mobile-specific images on desktop
- Use `min-width` instead of `max-width` when possible
- Test on real devices

## Learning Outcomes
✅ Understand responsive design principles
✅ Write and use media queries
✅ Implement mobile-first approach
✅ Create responsive layouts
✅ Test responsive designs
✅ Use common breakpoints

## Common Mistakes
❌ Desktop-first instead of mobile-first
❌ Too many breakpoints
❌ Not testing on real devices
❌ Forgetting viewport meta tag
❌ Images not scaling properly

## Best Practices
✅ Mobile-first approach
✅ Keep breakpoints simple (2-4 main ones)
✅ Test on real devices
✅ Use flexible units (%, em, rem)
✅ Optimize images for different sizes
✅ Always include viewport meta tag

## Next Steps
→ Move to **Day 18** to learn about pseudo-elements and pseudo-classes

---

*Responsive design is not optional - make your sites work on all devices!* 📱💻

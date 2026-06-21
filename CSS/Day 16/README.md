# Day 16 - CSS Variables (Custom Properties)

## Overview
Learn CSS Variables (Custom Properties) - a powerful feature for maintaining consistent styling and reducing repetition.

## File: `index.html`

This file demonstrates CSS variables and their usage.

## CSS Variables Basics

### Defining Variables
```css
/* Define in root for global use */
:root {
    --primary-color: #0066cc;
    --secondary-color: #333333;
    --spacing-unit: 8px;
    --border-radius: 4px;
    --font-family: 'Arial', sans-serif;
}
```

### Using Variables
```css
body {
    color: var(--secondary-color);
    font-family: var(--font-family);
}

button {
    background-color: var(--primary-color);
    padding: var(--spacing-unit) calc(var(--spacing-unit) * 2);
    border-radius: var(--border-radius);
}
```

## Variable Naming Convention
```css
:root {
    /* Use descriptive names with hyphens */
    --color-primary: #0066cc;
    --color-secondary: #333;
    --color-error: #cc0000;
    
    --spacing-small: 4px;
    --spacing-medium: 8px;
    --spacing-large: 16px;
    
    --font-size-small: 12px;
    --font-size-base: 16px;
    --font-size-large: 20px;
    
    --border-width: 1px;
    --border-radius-small: 4px;
    --border-radius-large: 8px;
}
```

## Scoped Variables

Variables can be scoped to specific elements:

```css
:root {
    --primary-color: blue;
}

.card {
    --primary-color: green;  /* Override for this element */
}

.card button {
    background-color: var(--primary-color);  /* Uses green */
}
```

## Fallback Values

Provide fallback if variable doesn't exist:

```css
button {
    background-color: var(--primary-color, blue);  /* Falls back to blue */
}
```

## Complex Variable Usage

### Calculations with calc()
```css
:root {
    --base-size: 16px;
}

h1 {
    font-size: calc(var(--base-size) * 2);
    line-height: calc(var(--base-size) * 1.5);
}
```

### Color with Opacity
```css
:root {
    --primary-color-rgb: 0, 102, 204;
}

button {
    background-color: rgba(var(--primary-color-rgb), 0.8);
}
```

## Practical Theme System

### Light Theme
```css
:root {
    --bg-color: #ffffff;
    --text-color: #333333;
    --border-color: #cccccc;
    --shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### Dark Theme
```css
@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: #1a1a1a;
        --text-color: #ffffff;
        --border-color: #444444;
        --shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
    }
}
```

### Using Theme Variables
```css
body {
    background-color: var(--bg-color);
    color: var(--text-color);
}

.card {
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow);
}
```

## CSS Variables Example

### Complete Design System
```css
:root {
    /* Colors */
    --color-primary: #0066cc;
    --color-secondary: #f0f0f0;
    --color-danger: #cc0000;
    --color-success: #00cc00;
    
    /* Spacing */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    
    /* Typography */
    --font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --size-xs: 12px;
    --size-sm: 14px;
    --size-base: 16px;
    --size-lg: 18px;
    --size-xl: 24px;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15);
}

body {
    font-family: var(--font-primary);
    font-size: var(--size-base);
    color: #333;
    background-color: white;
}

h1 {
    font-size: var(--size-xl);
    margin-bottom: var(--space-lg);
}

.button {
    padding: var(--space-sm) var(--space-md);
    background-color: var(--color-primary);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    font-size: var(--size-base);
    color: white;
}

.card {
    padding: var(--space-lg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    margin-bottom: var(--space-md);
}
```

## Dynamic Variables with JavaScript

```javascript
// Set variable from JavaScript
document.documentElement.style.setProperty('--primary-color', '#ff0000');

// Get variable from JavaScript
const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');

// Set variable on specific element
document.querySelector('.card').style.setProperty('--card-color', 'blue');
```

## Browser Support
- Modern browsers: Chrome 49+, Firefox 31+, Safari 9.1+, Edge 15+
- IE 11: Not supported

## Benefits of CSS Variables
✅ Easier maintenance - change once, applies everywhere
✅ Consistent styling across entire project
✅ Dynamic theming support
✅ Cleaner, more readable CSS
✅ Easier debugging
✅ Better organization

## Learning Outcomes
✅ Define CSS variables
✅ Use variables in CSS rules
✅ Create scoped variables
✅ Implement fallback values
✅ Build a design system with variables
✅ Use JavaScript with CSS variables

## Common Mistakes
❌ Using variables for static values that never change
❌ Not following naming conventions
❌ Complex variable names
❌ Overusing variables (every value doesn't need one)
❌ Not considering browser compatibility

## Best Practices
✅ Define global variables in `:root`
✅ Use consistent naming convention
✅ Document your variable system
✅ Group related variables
✅ Use for values that might change
✅ Keep variable system simple and maintainable

## Next Steps
→ Move to **Day 17** to learn about responsive design with media queries

---

*CSS Variables are a game-changer for maintainable, scalable stylesheets!* 🎨

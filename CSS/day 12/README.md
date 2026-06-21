# Day 12 - CSS Shadows & Visual Effects

## Overview
Learn to add depth to your designs with shadows and other visual effects.

## Files in This Project

### 📄 `index.html`
- Demonstrates shadow effects and visual styling

## Shadow Effects

### Text Shadow
Add shadow to text:
```css
h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Multiple shadows for depth */
h1 {
    text-shadow: 
        1px 1px 2px rgba(0,0,0,0.3),
        2px 2px 4px rgba(0,0,0,0.2),
        3px 3px 6px rgba(0,0,0,0.1);
}
```

### Box Shadow
Add shadow to elements:
```css
.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Format: offset-x offset-y blur-radius spread-radius color */
.card {
    box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.1);
}

/* Multiple shadows */
.card {
    box-shadow: 
        0 2px 4px rgba(0,0,0,0.1),
        0 8px 16px rgba(0,0,0,0.2);
}

/* Inset shadow */
.inner {
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
}
```

### Outline & Outline-Offset
```css
button {
    outline: 2px solid blue;
    outline-offset: 2px;  /* Space between element and outline */
}
```

Difference from border:
- Border is inside the box model
- Outline is outside, doesn't affect layout

## Shadow Values Explained
```
box-shadow: X  Y  BLUR  SPREAD  COLOR
            ↓  ↓   ↓     ↓      ↓
          right down blur  expand color

Example:
box-shadow: 5px 5px 10px 2px rgba(0,0,0,0.3)
```

- **X offset** (5px): Shadow moves 5px to the right
- **Y offset** (5px): Shadow moves 5px down
- **Blur radius** (10px): How blurred the shadow is
- **Spread radius** (2px): Expands shadow outward
- **Color** (rgba): Shadow color with transparency

## Shadow Best Practices

### Subtle Shadow (Most Common)
```css
.card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### Elevated Effect
```css
.button {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.button:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

### Deep Shadow
```css
.modal {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

### Soft Text Shadow
```css
h1 {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
```

## Learning Outcomes
✅ Add text shadows for depth
✅ Add box shadows to elements
✅ Use outline and outline-offset
✅ Create professional shadow effects
✅ Understand shadow layering

## Common Mistakes
❌ Shadows too dark or too intense
❌ Using shadows without accessibility consideration
❌ Confusing outline with border
❌ Not considering performance (many shadows)

## Performance Tip
Keep shadow blur and spread values reasonable to avoid performance issues.

## Next Steps
→ Move to **Day 13** to learn about navigation menus and styling lists

---

*Shadows add depth and dimension - use them wisely for professional designs!* 🎨

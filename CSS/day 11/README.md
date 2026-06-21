# Day 11 - Advanced Typography (Continuation)

## Overview
Continue learning advanced typography concepts. This day builds on Day 10's foundation with Google Fonts and extends text styling techniques.

## File: `index.html`

This file continues the typography lessons from Day 10.

## Key Topics Covered

### Font Stacking & Fallbacks
```css
body {
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
```
- Primary choice: 'Roboto' (Google Font)
- Secondary: 'Helvetica Neue' (system font)
- Tertiary: Arial (widely supported)
- Generic: sans-serif (ultimate fallback)

### Web Font Performance
- Use `font-display: swap` to show fallback text immediately
- Limit font weights (e.g., only 400 and 700)
- Use modern formats (WOFF2)

### Advanced Text Effects
```css
p {
    letter-spacing: 3px;      /* Wider letter spacing */
    word-spacing: 10px;       /* Space between words */
    text-indent: 2em;         /* Indent first line */
    white-space: pre;         /* Preserve whitespace */
    word-wrap: break-word;    /* Break long words */
    overflow-wrap: break-word;
}
```

### Text Properties
```css
h1 {
    text-overflow: ellipsis;   /* Show ... if text overflows */
    white-space: nowrap;
    overflow: hidden;
}
```

## Learning Outcomes
✅ Master font families and fallbacks
✅ Optimize web fonts for performance
✅ Apply advanced text styling
✅ Understand text overflow handling
✅ Create professional typography

## Next Steps
→ Move to **Day 12** to learn about shadows and visual effects

---

*Typography is the silent ambassador of your brand - master it!* ✍️

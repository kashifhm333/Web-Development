# Day 10 - Web Typography & Google Fonts

## Overview
Master web typography! Learn to use Google Fonts and improve text styling on your websites.

## File: `fonts.html`

This file demonstrates Google Fonts integration and advanced typography styling.

## Google Fonts

Google Fonts provides free, open-source fonts that you can use on your website.

### Step 1: Import Google Font
```html
<head>
    <!-- Import from Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
</head>
```

### Step 2: Use in CSS
```css
body {
    font-family: 'Roboto', sans-serif;
}

h1 {
    font-family: 'Open Sans', sans-serif;
}
```

## Font Concepts

### Font-Family
Specify font stack (fallback fonts):
```css
body {
    /* Primary: Google Font, Fallbacks: system fonts */
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
}
```

Generic font families (always include one):
- `serif` - Fonts with serifs (Times New Roman, Georgia)
- `sans-serif` - Fonts without serifs (Arial, Helvetica)
- `monospace` - Fixed-width (Courier, Courier New)
- `cursive` - Cursive-style fonts
- `fantasy` - Decorative fonts

### Font-Size
```css
p {
    font-size: 16px;          /* Pixels (absolute) */
    font-size: 1.5em;         /* Relative to parent (16 * 1.5 = 24px) */
    font-size: 1.5rem;        /* Relative to root (16 * 1.5 = 24px) */
    font-size: 50%;           /* Relative to parent */
}
```

Best practice: Use `rem` for consistent scaling

### Font-Weight
```css
p {
    font-weight: 400;         /* Normal weight */
    font-weight: 700;         /* Bold weight */
    font-weight: bold;        /* Same as 700 */
    font-weight: normal;      /* Same as 400 */
}
```

Common weights: 300 (light), 400 (normal), 500 (medium), 700 (bold), 900 (black)

### Font-Style
```css
p {
    font-style: normal;       /* Normal (upright) */
    font-style: italic;       /* Italicized */
    font-style: oblique;      /* Slanted (not true italic) */
}
```

### Line-Height
Space between lines of text:
```css
p {
    line-height: 1.5;         /* 1.5 times font size */
    line-height: 24px;        /* Exactly 24px */
    line-height: 150%;        /* 150% of font size */
}
```

Best practice: 1.5 to 1.8 for readability

### Letter-Spacing
Space between letters:
```css
h1 {
    letter-spacing: 2px;      /* 2 pixels between letters */
    letter-spacing: 0.05em;   /* 5% of font size */
}
```

### Text-Transform
```css
h1 {
    text-transform: uppercase;     /* UPPERCASE */
    text-transform: lowercase;     /* lowercase */
    text-transform: capitalize;    /* Capitalize First Letter */
    text-transform: none;          /* Default */
}
```

## Text Alignment
```css
p {
    text-align: left;         /* Left align (default for LTR) */
    text-align: right;        /* Right align */
    text-align: center;       /* Center align */
    text-align: justify;      /* Justify to both edges */
}
```

## Text Decoration
```css
a {
    text-decoration: none;         /* Remove underline */
    text-decoration: underline;    /* Add underline */
    text-decoration: overline;     /* Line above text */
    text-decoration: line-through; /* Strikethrough */
}
```

## Text Shadow
```css
h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Format: offset-x offset-y blur-radius color */
/* Multiple shadows: */
h1 {
    text-shadow: 
        2px 2px 4px rgba(0, 0, 0, 0.3),
        4px 4px 8px rgba(0, 0, 0, 0.2);
}
```

## Font Properties Shorthand
```css
p {
    /* Shorthand */
    font: italic bold 16px 'Roboto', sans-serif;
    
    /* Equivalent to: */
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
}
```

## Complete Typography Example
```css
body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}

h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
}

p {
    margin-bottom: 1rem;
    text-align: justify;
}

.highlight {
    font-weight: bold;
    color: #e74c3c;
}

.subtitle {
    font-style: italic;
    color: #7f8c8d;
    font-size: 0.9rem;
    letter-spacing: 1px;
}
```

## Popular Google Fonts
- **Sans-serif**: Roboto, Open Sans, Lato, Poppins, Inter
- **Serif**: Playfair Display, Lora, Merriweather
- **Monospace**: Roboto Mono, Space Mono, JetBrains Mono
- **Display**: Pacifico, Raleway, Montserrat

## Learning Outcomes
✅ Integrate Google Fonts into projects
✅ Understand font properties
✅ Apply typography best practices
✅ Use font stacks correctly
✅ Improve readability with proper spacing
✅ Create professional text styling

## Typography Best Practices
✅ Limit to 2-3 font families maximum
✅ Ensure good contrast for readability
✅ Use appropriate line-height (1.5-1.8)
✅ Keep font sizes reasonable (16px+ for body)
✅ Use font weights strategically
✅ Test on different devices
✅ Consider accessibility

## Common Mistakes
❌ Using too many different fonts
❌ Font sizes too small (< 14px)
❌ Line-height too tight (< 1.4)
❌ Poor contrast between text and background
❌ Forgetting fallback fonts
❌ Using web fonts excessively (performance impact)

## Font Performance
- Each font file increases page load time
- Use font-display: swap to show text immediately
- Limit to essential weights and styles
- Consider system fonts for faster loading

## Accessibility Considerations
✅ Use sufficient contrast (WCAG AA standard)
✅ Don't rely solely on color to convey information
✅ Use serif fonts for body text (more readable)
✅ Avoid very decorative fonts for long content

## Next Steps
→ Move to **Day 11** to continue with typography and font styling

---

*Good typography can make or break a website - choose fonts wisely and your users will thank you!* ✍️

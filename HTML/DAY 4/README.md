# Day 4 - HTML Images

## Overview
Learn how to embed and work with images in HTML. Images are essential for creating visually appealing web pages.

## Files in This Project

### 📄 `index.html` & `index1.html`
- **Purpose**: Demonstrate image embedding techniques
- **Key Concepts**:
  - `<img>` tag syntax
  - `src` and `alt` attributes
  - Image paths (relative and absolute)
  - Image accessibility

### 🖼️ Images (1.jpg - 5.jpg or similar)
- Sample images used in the HTML files

## Key HTML Image Concepts

### Basic Image Tag
```html
<img src="image.jpg" alt="Description of image">
```

### Important Attributes
| Attribute | Purpose | Example |
|-----------|---------|---------|
| `src` | Image source path | `src="images/photo.jpg"` |
| `alt` | Alternative text (for accessibility) | `alt="A sunset over the beach"` |
| `width` | Image width | `width="300"` |
| `height` | Image height | `height="200"` |
| `title` | Hover text | `title="Click to view"` |

### Image Paths
- **Relative path**: `<img src="images/photo.jpg">` (relative to HTML file)
- **Absolute path**: `<img src="/images/photo.jpg">` (from root)
- **External URL**: `<img src="https://example.com/photo.jpg">`

## Learning Outcomes
✅ Understand the `<img>` tag and its attributes
✅ Use relative and absolute paths correctly
✅ Write descriptive `alt` text for accessibility
✅ Optimize images for web display
✅ Understand why `alt` text matters

## Why Alt Text Matters
- **Accessibility**: Screen readers use it for visually impaired users
- **SEO**: Search engines use it to understand images
- **Fallback**: Shows if image fails to load
- **Professional**: Required for WCAG compliance

## Common Mistakes to Avoid
❌ Missing `alt` attribute
❌ Using unclear alt text like "image" or "photo"
❌ Using absolute paths that won't work on other computers
❌ Not optimizing image sizes (use tools like TinyPNG)

## Next Steps
→ Move to **Day 5** to learn about HTML forms

---

*Remember: Always include descriptive alt text - it helps both people and search engines understand your images!* 🖼️

# Day 7 - HTML Entities & Semantic Markup

## Overview
Learn HTML entities (special characters) and semantic HTML elements for proper code structure and display of special characters.

## File: `index.html`

This file demonstrates HTML entities and semantic markup elements.

## HTML Entities

HTML entities allow you to display special characters that have meaning in HTML.

### Common HTML Entities

| Entity | Code | Symbol | Purpose |
|--------|------|--------|---------|
| Less than | `&lt;` | < | Display angle brackets |
| Greater than | `&gt;` | > | Display angle brackets |
| Ampersand | `&amp;` | & | Display ampersand |
| Quotation mark | `&quot;` | " | Display double quotes |
| Apostrophe | `&apos;` | ' | Display single quote |
| Non-breaking space | `&nbsp;` | (space) | Space that won't wrap |
| Copyright | `&copy;` | © | Copyright symbol |
| Registered | `&reg;` | ® | Registered trademark |
| Trademark | `&trade;` | ™ | Trademark symbol |
| Bullet | `&bull;` | • | Bullet point |
| Arrow | `&rarr;` | → | Right arrow |

### Why Use Entities?
```html
<!-- Without entities - might break your code -->
<p>If x < 10 and y > 5</p>  <!-- This might confuse the browser -->

<!-- With entities - proper display -->
<p>If x &lt; 10 and y &gt; 5</p>  <!-- Displays correctly -->
```

## Semantic HTML Elements

### The `<pre>` Tag (Preformatted Text)
```html
<pre>
    This text maintains
    spaces    and
    line breaks
</pre>
```
- Preserves whitespace and line breaks
- Useful for code, poetry, ASCII art
- Uses monospace font by default

### The `<code>` Tag (Code)
```html
<p>Use the <code>console.log()</code> function to debug.</p>
```
- Indicates inline code
- Displays in monospace font
- For referencing code within text

### Combining `<pre>` and `<code>`
```html
<pre><code>
function helloWorld() {
    console.log("Hello, World!");
}
</code></pre>
```
- Best practice for displaying code blocks
- Preserves formatting and uses monospace font

## Other Semantic Elements

| Tag | Purpose | Example |
|-----|---------|---------|
| `<article>` | Self-contained content | Blog post, news item |
| `<section>` | Thematic grouping | Chapter, major section |
| `<header>` | Introductory content | Page header, section header |
| `<footer>` | End of section | Copyright, links |
| `<nav>` | Navigation links | Menu, breadcrumbs |
| `<aside>` | Sidebar content | Related links, ads |
| `<main>` | Primary content | Main page content |
| `<figure>` | Illustration, diagram | Images with captions |
| `<figcaption>` | Figure caption | Caption for `<figure>` |

## Semantic HTML Example
```html
<article>
    <header>
        <h1>Article Title</h1>
        <p>Published on <time>2024-01-15</time></p>
    </header>
    
    <section>
        <h2>Introduction</h2>
        <p>Article content here...</p>
    </section>
    
    <section>
        <h2>Main Content</h2>
        <p>More content...</p>
    </section>
    
    <footer>
        <p>&copy; 2024 Your Name</p>
    </footer>
</article>
```

## Learning Outcomes
✅ Use HTML entities for special characters
✅ Understand when to use `<pre>` and `<code>`
✅ Write semantically correct HTML
✅ Improve document structure
✅ Enhance accessibility and SEO

## Why Semantic HTML Matters
- **Accessibility**: Screen readers understand document structure
- **SEO**: Search engines better understand your content
- **Maintainability**: Code is easier to read and understand
- **Browser Support**: Better rendering across devices
- **Best Practice**: Professional development standard

## Common Mistakes
❌ Using `<div>` for everything instead of semantic tags
❌ Forgetting to escape entities in code blocks
❌ Not using `<code>` for technical references
❌ Mixing `<pre>` with interactive content

## Character Encoding
```html
<meta charset="UTF-8">
```
- Always include charset declaration
- UTF-8 supports all world languages
- Essential for proper character display

## Next Steps
→ Move to **Day 8** to learn CSS fundamentals and selectors

---

*Semantic HTML is like proper grammar in writing - it makes your code understandable to both humans and machines!* 📚

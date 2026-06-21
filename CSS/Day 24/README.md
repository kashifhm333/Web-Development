# Day 24 - Image Manipulation with CSS

## Overview
Learn to manipulate and style images using CSS properties like object-fit and object-position.

## Files in This Project

### 📄 `index.html`, `background.html`
- Demonstrate image sizing and positioning techniques

## Object-Fit Property

Controls how images fit within their container.

### Values

#### object-fit: fill (Default)
```css
img {
    object-fit: fill;  /* Stretch to fill container */
    width: 300px;
    height: 200px;
}
```
Image stretches to fill container, may distort aspect ratio.

#### object-fit: contain
```css
img {
    object-fit: contain;  /* Fit inside container, keep aspect ratio */
    width: 300px;
    height: 200px;
}
```
Image fits entirely in container, maintains aspect ratio, may have empty space.

#### object-fit: cover
```css
img {
    object-fit: cover;  /* Cover container, keep aspect ratio */
    width: 300px;
    height: 200px;
}
```
Image covers entire container, maintains aspect ratio, may crop parts.

#### object-fit: scale-down
```css
img {
    object-fit: scale-down;  /* Use smaller of contain or original size */
    width: 300px;
    height: 200px;
}
```

#### object-fit: none
```css
img {
    object-fit: none;  /* Don't resize, use original size */
    width: 300px;
    height: 200px;
}
```

## Object-Position Property

Position image within container (like background-position):

```css
img {
    object-fit: cover;
    object-position: center;      /* Default */
    object-position: top left;
    object-position: bottom right;
    object-position: 50% 50%;     /* Percentage-based */
    object-position: left center;
}
```

## Practical Image Examples

### Profile Picture (Circle)
```css
.profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}
```

### Hero Image
```css
.hero-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center top;
}
```

### Thumbnail Grid
```css
.thumbnail-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.thumbnail {
    width: 100%;
    aspect-ratio: 1 / 1;  /* Square */
    object-fit: cover;
    object-position: center;
}
```

### Responsive Images
```css
img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
}

@media (max-width: 768px) {
    img {
        width: 100%;
    }
}
```

## Image Filters

Apply visual effects to images:

```css
img {
    filter: blur(5px);           /* Blur effect */
    filter: brightness(150%);    /* Brighten */
    filter: contrast(120%);      /* Increase contrast */
    filter: grayscale(100%);     /* Black and white */
    filter: hue-rotate(90deg);   /* Shift colors */
    filter: invert(100%);        /* Invert colors */
    filter: saturate(200%);      /* More colors */
    filter: sepia(100%);         /* Sepia tone */
    filter: opacity(50%);        /* Transparent */
    filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.3));
}
```

### Multiple Filters
```css
img {
    filter: blur(2px) brightness(110%) contrast(120%);
}
```

### Hover Filter Effect
```css
img {
    transition: filter 0.3s ease;
    filter: grayscale(100%);
}

img:hover {
    filter: grayscale(0%);
}
```

## Image Borders and Styling

### Border and Shadow
```css
img {
    border: 5px solid #333;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

### Image with Caption
```html
<figure>
    <img src="image.jpg" alt="Description">
    <figcaption>Image caption here</figcaption>
</figure>
```

```css
figure {
    margin: 0;
    text-align: center;
}

figcaption {
    padding: 10px;
    background-color: #f5f5f5;
    font-size: 14px;
    color: #666;
}
```

## Background Images with object-fit

Using `<div>` with background image:

```css
.container {
    width: 300px;
    height: 200px;
    background-image: url('image.jpg');
    background-size: cover;        /* Similar to object-fit: cover */
    background-position: center;   /* Similar to object-position */
    background-repeat: no-repeat;
}
```

## Image Aspect Ratio

Lock aspect ratio for responsive images:

```css
img {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;  /* Force 16:9 ratio */
}

/* Or with container */
.image-container {
    aspect-ratio: 3 / 2;
    width: 100%;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Picture Element (HTML)

Serve different images based on media queries:

```html
<picture>
    <source media="(min-width: 1024px)" srcset="large.jpg">
    <source media="(min-width: 768px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Description">
</picture>
```

## Advanced Image Effects

### Image Overlay
```css
.image-container {
    position: relative;
}

.image-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
```

### Image Zoom Effect
```css
.zoom-container {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 8px;
}

.zoom-container img {
    transition: transform 0.3s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.zoom-container:hover img {
    transform: scale(1.1);
}
```

### Lazy Loading
```html
<img src="image.jpg" alt="Description" loading="lazy">
```

Native browser lazy loading for performance.

## Responsive Image Strategy

```css
/* Mobile first */
.image {
    max-width: 100%;
    height: auto;
}

/* Tablet */
@media (min-width: 768px) {
    .image {
        width: 80%;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .image {
        width: 600px;
    }
}
```

## Learning Outcomes
✅ Use object-fit to control image sizing
✅ Position images with object-position
✅ Apply CSS filters to images
✅ Create image effects and overlays
✅ Handle responsive images
✅ Understand aspect-ratio property

## Common Mistakes
❌ Not setting container dimensions for object-fit
❌ Distorted images due to wrong aspect ratio
❌ Forgetting alt text for accessibility
❌ Using wrong image formats
❌ Large unoptimized images affecting performance

## Best Practices
✅ Always use alt text
✅ Optimize image sizes
✅ Use modern formats (WebP with fallback)
✅ Use object-fit for flexible layouts
✅ Lazy load images below fold
✅ Test on different devices

## Performance Tips
- Optimize images (use TinyPNG, ImageOptim)
- Use modern formats (WebP with JPG fallback)
- Serve different sizes for different screens
- Lazy load images below fold
- Use CDN for image delivery

## Next Steps
→ Move to **Day 25** to start learning JavaScript

---

*Proper image handling is essential for responsive, performant websites!* 🖼️

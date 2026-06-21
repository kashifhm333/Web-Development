# Day 22 - CSS Transitions & Basic Animations

## Overview
Add smooth motion to your designs with CSS transitions and basic transforms.

## Files in This Project

### 📄 `index.html`, `harry.html`, `trying again/index.html`
- Demonstrate transition and transform techniques

## CSS Transitions

Transitions create smooth animations between CSS property changes.

### Basic Transition Syntax
```css
button {
    background-color: blue;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: darkblue;
}
```

### Transition Properties

#### transition-property
Which property to animate:

```css
div {
    transition-property: background-color;
    transition-property: all;              /* All properties */
    transition-property: width, height;    /* Multiple properties */
}
```

#### transition-duration
How long the animation takes:

```css
div {
    transition-duration: 0.3s;    /* 300 milliseconds */
    transition-duration: 1s;      /* 1 second */
}
```

#### transition-timing-function
How the animation progresses:

```css
div {
    transition-timing-function: ease;          /* Default - slow start and end */
    transition-timing-function: linear;        /* Constant speed */
    transition-timing-function: ease-in;       /* Slow start */
    transition-timing-function: ease-out;      /* Slow end */
    transition-timing-function: ease-in-out;   /* Slow start and end */
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

#### transition-delay
Wait before animation starts:

```css
div {
    transition: background-color 0.3s ease 0.5s;  /* 0.5s delay */
}
```

### Shorthand Syntax
```css
div {
    /* property duration timing delay */
    transition: background-color 0.3s ease 0s;
    transition: all 0.3s ease;
}
```

### Multiple Transitions
```css
button {
    transition: 
        background-color 0.3s ease,
        transform 0.2s ease,
        box-shadow 0.3s ease;
}
```

## CSS Transforms

Transform elements in 2D/3D space without affecting document flow.

### 2D Transforms

#### Translate (Move)
```css
.box {
    transform: translate(50px, 100px);    /* Move right 50px, down 100px */
    transform: translateX(50px);           /* Move right 50px */
    transform: translateY(100px);          /* Move down 100px */
}
```

#### Scale (Resize)
```css
.box {
    transform: scale(1.5);        /* Grow 1.5x */
    transform: scaleX(2);         /* Double width */
    transform: scaleY(0.5);       /* Half height */
}
```

#### Rotate
```css
.box {
    transform: rotate(45deg);     /* Rotate 45 degrees clockwise */
    transform: rotate(-45deg);    /* Rotate counter-clockwise */
    transform: rotateZ(180deg);   /* Rotate around Z-axis */
}
```

#### Skew
```css
.box {
    transform: skew(10deg);       /* Skew on both axes */
    transform: skewX(20deg);      /* Skew horizontally */
    transform: skewY(10deg);      /* Skew vertically */
}
```

### Multiple Transforms
```css
.box {
    transform: translate(50px, 50px) rotate(45deg) scale(1.5);
}
```

### Transform Origin
Where transform happens from (default: center):

```css
.box {
    transform-origin: top left;
    transform-origin: 100% 100%;
    transform: rotate(45deg);
}
```

## Practical Transition Examples

### Smooth Color Change
```css
button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: darkblue;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

### Hover Scale Effect
```css
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

### Expanding Menu Items
```css
.menu-item {
    transition: width 0.3s ease;
    width: 30px;
    overflow: hidden;
}

.menu-item:hover {
    width: 200px;
}
```

### Rotating Icon on Hover
```css
.icon {
    transition: transform 0.3s ease;
    display: inline-block;
}

.icon:hover {
    transform: rotate(360deg);
}
```

### Sliding Underline
```css
a {
    position: relative;
    text-decoration: none;
    color: #0066cc;
}

a::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #0066cc;
    transition: width 0.3s ease;
}

a:hover::after {
    width: 100%;
}
```

### Fade In/Out
```css
.fade {
    transition: opacity 0.3s ease;
    opacity: 1;
}

.fade:hover {
    opacity: 0.5;
}
```

### Smooth Margin Change
```css
li {
    margin-left: 0;
    transition: margin-left 0.3s ease;
}

li:hover {
    margin-left: 10px;
}
```

## Transform Examples

### Centered Button with Hover
```css
button {
    position: relative;
    transform-origin: center;
    transition: all 0.3s ease;
}

button:hover {
    transform: scale(1.1) translateY(-2px);
}
```

### Image Tilt Effect
```css
img {
    transition: transform 0.3s ease;
    transform-origin: center;
}

img:hover {
    transform: perspective(1000px) rotateX(5deg) rotateY(-5deg);
}
```

### Skew Effect on Click
```css
button:active {
    transform: skew(-5deg, 5deg);
}
```

## Performance Considerations

Optimize animations by using efficient properties:

```css
/* Good - transform is fast */
.box {
    transition: transform 0.3s ease;
}

.box:hover {
    transform: translateX(10px);
}

/* Avoid - repaints page */
.box {
    transition: left 0.3s ease;
}

.box:hover {
    left: 10px;
}
```

## Learning Outcomes
✅ Create smooth transitions between states
✅ Use transform to move, scale, rotate elements
✅ Understand timing functions
✅ Combine transitions and transforms
✅ Create interactive hover effects
✅ Optimize animation performance

## Common Mistakes
❌ Using too many transitions (confusing)
❌ Long animation durations (feels sluggish)
❌ Transitioning position instead of transform
❌ Not using transform-origin correctly
❌ Forgetting transition on initial state

## Best Practices
✅ Use transform instead of position properties
✅ Keep animations under 300-500ms
✅ Test on actual devices
✅ Use linear for movement, ease for others
✅ Don't transition all properties

## Next Steps
→ Move to **Day 23** to learn about advanced keyframe animations

---

*Smooth transitions bring websites to life and improve user experience!* ✨

# Day 23 - Keyframe Animations

## Overview
Master complex animations using CSS keyframes - create animations that loop, change states, and produce sophisticated effects.

## Files in This Project

### 📄 `index.html`, `harry.html`
- Demonstrate keyframe animations with @keyframes

## CSS Keyframes (@keyframes)

Define animations with multiple steps using @keyframes.

### Basic Keyframe Syntax
```css
@keyframes slidein {
    from {
        margin-left: 100%;
    }
    to {
        margin-left: 0%;
    }
}

div {
    animation: slidein 3s ease-in;
}
```

### Percentage-based Keyframes
```css
@keyframes fadeInColor {
    0% {
        opacity: 0;
        background-color: red;
    }
    50% {
        opacity: 0.5;
        background-color: yellow;
    }
    100% {
        opacity: 1;
        background-color: green;
    }
}

.box {
    animation: fadeInColor 3s ease;
}
```

## Animation Properties

### animation-name
Name of the animation to use:

```css
div {
    animation-name: slidein;
}
```

### animation-duration
How long the animation takes:

```css
div {
    animation-duration: 3s;   /* 3 seconds */
    animation-duration: 1000ms; /* 1000 milliseconds */
}
```

### animation-timing-function
How animation progresses:

```css
div {
    animation-timing-function: ease;
    animation-timing-function: linear;
    animation-timing-function: ease-in;
    animation-timing-function: ease-out;
    animation-timing-function: cubic-bezier();
}
```

### animation-delay
Delay before animation starts:

```css
div {
    animation-delay: 1s;  /* Wait 1 second */
}
```

### animation-iteration-count
How many times animation plays:

```css
div {
    animation-iteration-count: 1;         /* Play once */
    animation-iteration-count: 3;         /* Play 3 times */
    animation-iteration-count: infinite;  /* Loop forever */
}
```

### animation-direction
Direction animation plays:

```css
div {
    animation-direction: normal;      /* 0% to 100% */
    animation-direction: reverse;     /* 100% to 0% */
    animation-direction: alternate;   /* 0→100→0 */
    animation-direction: alternate-reverse;
}
```

### animation-fill-mode
What happens before/after animation:

```css
div {
    animation-fill-mode: none;       /* Default state before/after */
    animation-fill-mode: forwards;   /* Stay at 100% state */
    animation-fill-mode: backwards;  /* Start from 0% state */
    animation-fill-mode: both;       /* Apply both forwards and backwards */
}
```

### animation-play-state
Pause and resume animations:

```css
div {
    animation-play-state: running;  /* Play animation */
    animation-play-state: paused;   /* Pause animation */
}

div:hover {
    animation-play-state: paused;
}
```

## Shorthand Syntax
```css
div {
    /* name duration timing delay iterations direction */
    animation: slidein 3s ease-in 0s 1 normal;
    animation: fadeInColor 2s ease infinite alternate;
}
```

## Practical Animation Examples

### Spinning Loader
```css
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.loader {
    width: 50px;
    height: 50px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
```

### Pulsing Effect
```css
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

.pulse {
    animation: pulse 2s ease-in-out infinite;
}
```

### Bounce Animation
```css
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

.bounce {
    animation: bounce 1s ease infinite;
}
```

### Fade In
```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fade-in {
    animation: fadeIn 0.5s ease-in;
}
```

### Slide In from Left
```css
@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in-left {
    animation: slideInLeft 0.5s ease-in;
}
```

### Rotate and Scale
```css
@keyframes rotateScale {
    0% {
        transform: rotate(0deg) scale(1);
        opacity: 1;
    }
    50% {
        transform: rotate(180deg) scale(1.5);
    }
    100% {
        transform: rotate(360deg) scale(1);
        opacity: 1;
    }
}

.rotate-scale {
    animation: rotateScale 2s ease infinite;
}
```

### Color Change
```css
@keyframes colorChange {
    0% {
        background-color: red;
    }
    25% {
        background-color: yellow;
    }
    50% {
        background-color: green;
    }
    75% {
        background-color: blue;
    }
    100% {
        background-color: red;
    }
}

.color-change {
    animation: colorChange 4s linear infinite;
}
```

### Heartbeat
```css
@keyframes heartbeat {
    0% {
        transform: scale(1);
    }
    15% {
        transform: scale(1.1);
    }
    30% {
        transform: scale(1);
    }
    45% {
        transform: scale(1.1);
    }
    60% {
        transform: scale(1);
    }
}

.heartbeat {
    animation: heartbeat 1s ease-in-out infinite;
}
```

### Shake Effect
```css
@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-10px);
    }
    75% {
        transform: translateX(10px);
    }
}

.shake {
    animation: shake 0.5s ease-in-out;
}
```

### Shimmer Effect
```css
@keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}

.shimmer {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 1000px 100%;
    animation: shimmer 2s infinite;
}
```

## Animation with JavaScript
```javascript
const element = document.querySelector('.box');

// Pause animation
element.style.animationPlayState = 'paused';

// Resume animation
element.style.animationPlayState = 'running';

// Listen to animation end
element.addEventListener('animationend', () => {
    console.log('Animation finished!');
});
```

## Performance Optimization

Use GPU-accelerated properties:
```css
@keyframes move {
    from {
        transform: translateX(0);    /* Fast */
    }
    to {
        transform: translateX(100px);
    }
}

/* Instead of: */
@keyframes slowMove {
    from {
        left: 0;  /* Slow - causes repaints */
    }
    to {
        left: 100px;
    }
}
```

## Learning Outcomes
✅ Create keyframe animations
✅ Use animation properties
✅ Understand timing and iteration
✅ Create infinite loops
✅ Combine multiple animations
✅ Optimize animation performance

## Common Mistakes
❌ Using `left`, `top` instead of `transform`
❌ Too many simultaneous animations
❌ Infinite animations on page load (performance)
❌ Animations that distract from content
❌ Long animation durations

## Best Practices
✅ Use transform and opacity for animations
✅ Keep animations purposeful
✅ Test performance on slow devices
✅ Offer way to disable animations
✅ Use `prefers-reduced-motion` for accessibility

## Accessibility: Respecting User Preferences
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

## Next Steps
→ Move to **Day 24** to learn about image manipulation with CSS

---

*Keyframe animations bring dynamic life to your websites!* 🎬

# 📁 useRef/src - useRef Hook Documentation

## Overview
This project demonstrates the useRef Hook in React - accessing and manipulating DOM elements directly without causing re-renders.

---

## 📄 File Documentation

### **App.jsx**
**Purpose:** Main component demonstrating useRef hook usage  
**Key Concepts:**
- Direct DOM element access
- Modifying DOM without state updates
- Persistent values across renders
- useRef vs useState differences
- useEffect for initialization

**What It Does:**
- Creates a reference to a button element
- Modifies the button's backgroundColor directly
- Demonstrates useRef doesn't cause re-renders
- Shows how to access and manipulate DOM imperatively

**useRef Basic Pattern:**
```jsx
import { useRef, useEffect } from 'react';

function App() {
  const buttonRef = useRef(null);
  
  useEffect(() => {
    // Access DOM element through ref.current
    buttonRef.current.style.backgroundColor = 'blue';
  }, []);
  
  return <button ref={buttonRef}>Click me</button>;
}
```

**Code Example - Changing Button Color:**
```jsx
const buttonRef = useRef(null);

useEffect(() => {
  // Direct DOM manipulation
  buttonRef.current.style.backgroundColor = '#3498db';
  buttonRef.current.style.color = 'white';
  buttonRef.current.textContent = 'Styled Button';
}, []);
```

**Common useRef Uses:**
1. **Accessing DOM Elements** - Get values like `input.value`
2. **Managing Focus** - `.focus()` on input
3. **Triggering Animations** - Play/pause video/audio
4. **Storing Mutable Values** - Values that don't need re-renders
5. **Integration with Third-party Libraries** - jQuery, D3, etc.

**Dependencies:** React, useRef, useEffect, NavBar, App.css

---

### **components/NavBar.jsx**
**Purpose:** Navigation component used in App  
**Simple presentation component**

---

## 🎯 useRef vs useState Comparison

| Feature | useState | useRef |
|---------|----------|--------|
| **Causes Re-render** | Yes | No |
| **Persistent Value** | Yes | Yes |
| **When to Update** | On state change | Immediately |
| **Use Case** | UI state | DOM access |
| **Initial Value** | Used once | Never changes |
| **Mutable** | No (immutable) | Yes (mutable) |

### Visual Example

#### useState (Causes Re-render)
```jsx
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1); // Re-render triggered
};
```

#### useRef (No Re-render)
```jsx
const countRef = useRef(0);

const increment = () => {
  countRef.current = countRef.current + 1; // NO re-render
};
```

---

## 💡 Common useRef Use Cases

### 1️⃣ Focus Input Field
```jsx
function TextInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

### 2️⃣ Get Input Value
```jsx
function App() {
  const inputRef = useRef(null);
  
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

### 3️⃣ Control Video/Audio
```jsx
function VideoPlayer() {
  const videoRef = useRef(null);
  
  const play = () => videoRef.current.play();
  const pause = () => videoRef.current.pause();
  
  return (
    <>
      <video ref={videoRef}>
        <source src="video.mp4" />
      </video>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </>
  );
}
```

### 4️⃣ Measuring DOM Elements
```jsx
function Measure() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (containerRef.current) {
      console.log('Width:', containerRef.current.offsetWidth);
      console.log('Height:', containerRef.current.offsetHeight);
    }
  }, []);
  
  return <div ref={containerRef}>Measure me</div>;
}
```

### 5️⃣ Store Mutable Value
```jsx
function Timer() {
  const idRef = useRef(null);
  
  const startTimer = () => {
    // Store interval ID without re-rendering
    idRef.current = setInterval(() => {
      // timer logic
    }, 1000);
  };
  
  const stopTimer = () => {
    clearInterval(idRef.current);
  };
  
  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}
```

---

## ⚠️ Important Guidelines

### Don't Use useRef For:
```jsx
// ❌ WRONG - Use useState instead
const [count, setCount] = useState(0);
const countRef = useRef(0);
countRef.current = count; // Unnecessary
```

### Do Use useRef For:
```jsx
// ✅ CORRECT - DOM access
const inputRef = useRef(null);
// ... later ...
inputRef.current.focus();
```

---

## 🔄 useRef Lifecycle

```
Component Renders
  ↓
useRef Created (on first render)
  ↓
ref.current Points to DOM Element
  ↓
useEffect Runs (can access ref)
  ↓
DOM Manipulation (no re-render)
  ↓
Component Keeps Using Same Ref
```

---

## 📚 Key Concepts

- **Immutable** - Never modify `.current` directly in render
- **Uncontrolled** - DOM managed outside React
- **No Re-render** - Updates don't trigger re-renders
- **Persistent** - Same ref object across renders
- **Direct Access** - Direct DOM manipulation capability

## 🎯 When to Use useRef

### Use When:
- Managing focus, text selection, or media playback
- Triggering animations
- Integrating with third-party DOM libraries
- Storing mutable values that don't need UI updates

### Don't Use When:
- You need to update UI (use useState)
- You can declare it as a regular variable
- During render time
- For values that don't change

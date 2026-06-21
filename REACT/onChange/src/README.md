# 📁 onChange/src - Event Handling Documentation

## Overview
This project demonstrates React event handling and controlled components using onChange handlers.

---

## 📄 File Documentation

### **App.jsx**
**Purpose:** Main component demonstrating onChange event handling  
**Key Concepts:**
- Controlled form inputs
- Multiple state variables
- onChange event handlers
- Form data management
- Toggle functionality

**What It Does:**
- Manages multiple input fields with state
- Handles text input changes through onChange
- Implements toggle button for boolean states
- Shows form value binding pattern

**Key Features & Code Pattern:**
```jsx
const [text, setText] = useState("");
const [form, setForm] = useState({ name: "", email: "" });

// onChange handler
const handleChange = (e) => {
  setText(e.target.value);
}

// Form handler
const handleFormChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
}

// onMouseOver event
const handleMouseOver = () => {
  // Action on hover
}
```

**Events Handled:**
- `onChange` - when input values change
- `onClick` - button clicks
- `onMouseOver` - hover effects

**Dependencies:** React, useState, App.css

**Learning Concepts:**
1. **Controlled Components** - input value tied to state
2. **Event Handlers** - managing onChange events
3. **Object Spread Operator** - updating nested form data
4. **Multiple States** - managing multiple form fields

---

### **main.jsx**
**Purpose:** React app entry point  
**Dependencies:** React, react-dom, App

---

### **App.css, index.css**
**Purpose:** Styling (minimal or empty in this project)

---

## 🎯 Key Patterns to Learn

### 1️⃣ Simple Input Handler
```jsx
const [value, setValue] = useState("");

<input value={value} onChange={(e) => setValue(e.target.value)} />
```

### 2️⃣ Form Object Handler
```jsx
const [form, setForm] = useState({ name: "", email: "" });

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
}

<input name="name" onChange={handleChange} />
<input name="email" onChange={handleChange} />
```

### 3️⃣ Toggle State
```jsx
const [isActive, setIsActive] = useState(false);

<button onClick={() => setIsActive(!isActive)}>
  {isActive ? "Active" : "Inactive"}
</button>
```

## 📊 Technologies Used
- **React 19.2.6** - Frontend framework
- **Vite 8.0.12** - Build tool
- **ESLint** - Code linting

## 🧠 Core Concepts
- Event handling in React
- Controlled components pattern
- State management with hooks
- Form handling best practices

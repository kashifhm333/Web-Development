# 📁 first/src - Source Code Documentation

## Overview
This directory contains the core React source code for the first project demonstrating basic React concepts like component composition, props, and state management.

---

## 📄 File Documentation

### **App.jsx**
**Purpose:** Main React application component  
**Key Concepts:**
- Component composition (uses NavBar and Footer components)
- State management with `useState` hook
- Event handling with onClick
- Button click counter functionality

**Key Features:**
- Imports NavBar and Footer components from documents folder
- Maintains counter state
- Passes count as prop to components
- CSS styling from App.css

**Usage Example:**
```jsx
const [count, setCount] = useState(0);
// Increment counter on button click
<button onClick={() => setCount(count + 1)}>Count: {count}</button>
```

**Dependencies:** React, useState hook, NavBar, Footer, App.css

---

### **main.jsx**
**Purpose:** React application entry point  
**Key Concepts:**
- Application initialization
- DOM mounting
- StrictMode wrapper for development checks

**What It Does:**
- Creates React root from DOM element with id "root"
- Wraps App component in StrictMode (catches development errors)
- Renders App component to the page

**Dependencies:** React, react-dom, App component

---

### **App.css**
**Purpose:** Styling for the App component and counter button  
**Key Styles:**
- `.counter-button`: Styles the increment button with hover effects
- `.hero`: Container for hero section layout
- CSS custom properties for spacing and colors
- Transform effects on button interaction

**Responsive Features:**
- Button transforms and scales on hover
- Flexible layout for different screen sizes

---

### **index.css**
**Purpose:** Global CSS variables and typography  
**Key Features:**
- Root CSS variables for consistent theming
- Light/dark mode color support
- Global font and spacing definitions
- Base typography settings

**CSS Variables Used:**
- `--color-primary`, `--color-secondary` (theme colors)
- `--spacing-unit` (consistent spacing)
- Font sizes for responsive typography

---

## 🔄 Component Hierarchy
```
App
├── NavBar (from documents/NavBar.jsx)
├── Counter Button
└── Footer (from documents/Footer.jsx)
```

## 🛠️ Key Technologies
- **Framework:** React 19.2.5
- **Build Tool:** Vite
- **Styling:** CSS with custom properties

## 📚 Learning Focus
This project teaches:
1. Basic component structure and composition
2. Using multiple components together
3. Simple state management with hooks
4. Event handling (onClick)
5. Component reusability

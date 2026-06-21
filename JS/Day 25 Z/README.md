# Day 25 Z - Node.js Basics

## Overview
Learn to run JavaScript outside the browser using Node.js.

## File: `node.js`

This file demonstrates Node.js fundamentals.

## What is Node.js?

Node.js is a JavaScript runtime that allows you to:
- Run JavaScript on your computer/server
- Build backend applications
- Access file system and network
- Use packages from npm

## Running Node.js

```bash
# Run a JavaScript file
node filename.js

# Interactive Node.js console
node

# Exit Node console
.exit
```

## Node.js Basics

### Console Logging
```javascript
console.log("Hello, World!");
console.log("Number:", 42);
console.log("Multiple values:", 1, 2, 3);

// Table format
console.table([{name: "Ronaldo", age: 40}]);

// Error logging
console.error("Error occurred!");

// Warn logging
console.warn("Warning message");
```

### Variables and Data Types
```javascript
let name = "Ronaldo";
let age = 40;
let isActive = true;
let skills = ["football", "leadership"];

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isActive);  // "boolean"
console.log(typeof skills);    // "object"
```

### Conditionals
```javascript
let age = 40;

if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Comparison operators
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 === 5);    // true (strict equal)
console.log(5 == "5");   // true (loose equal - avoid!)
console.log(5 !== 3);    // true (not equal)
```

### Objects
```javascript
let player = {
    name: "Ronaldo",
    age: 40,
    position: "Forward",
    score: function() {
        console.log(`${this.name} scored a goal!`);
    }
};

console.log(player.name);      // "Ronaldo"
console.log(player["age"]);    // 40
player.score();                // "Ronaldo scored a goal!"
```

### Arrays and Loops
```javascript
let numbers = [1, 2, 3, 4, 5];

// For loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// forEach
numbers.forEach(num => {
    console.log(num);
});

// map
let doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]
```

### Functions
```javascript
// Function declaration
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));  // 8

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(5, 3));  // 15

// Function with default parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());           // "Hello, Guest!"
console.log(greet("Ronaldo")); // "Hello, Ronaldo!"
```

### Type Checking
```javascript
let value = "42";

// Check type
console.log(typeof value);      // "string"

// Convert types
let number = parseInt(value);   // 42
let float = parseFloat("3.14"); // 3.14
let string = String(42);        // "42"
let boolean = Boolean(1);       // true

// Comparison
console.log(5 > 3);             // true
console.log(5 === "5");         // false (strict)
console.log(5 == "5");          // true (loose)
```

## Learning Outcomes
✅ Understand Node.js runtime
✅ Run JavaScript files in Node.js
✅ Use console methods
✅ Work with variables and data types
✅ Write conditionals and loops
✅ Create and use functions

## Node.js File Structure

```
project/
├── index.js
├── utils.js
├── package.json
└── node_modules/
```

## Next Steps
→ Move to **Day 26** (empty) or **Day 27** to learn DOM manipulation

---

*Node.js extends JavaScript beyond the browser!* 🚀

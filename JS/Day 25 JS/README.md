# Day 25 JS - JavaScript Fundamentals

## Overview
Begin your JavaScript journey! Learn core programming concepts and start writing interactive code.

## Files in This Project

### 📄 `index.js`
Main file with fundamental JavaScript concepts

### 📄 `string.js`
String manipulation and operations

## JavaScript Basics

### Variables
```javascript
// var (avoid - old way)
var x = 10;

// let (block-scoped, recommended)
let name = "Ronaldo";

// const (constant, recommended)
const age = 40;
```

### Data Types
```javascript
// String
let message = "Hello, World!";
let template = `Name: ${name}`; // Template literals

// Number
let count = 42;
let price = 19.99;

// Boolean
let isActive = true;
let isEmpty = false;

// Array
let colors = ["red", "green", "blue"];
let mixed = [1, "two", true, null];

// Object
let person = {
    name: "Ronaldo",
    age: 40,
    isPlayer: true
};

// null and undefined
let empty = null;
let notDefined = undefined;
```

### String Operations
```javascript
// Concatenation
let greeting = "Hello" + " " + "World"; // "Hello World"

// Template literals (interpolation)
let name = "Ronaldo";
let message = `Welcome, ${name}!`; // "Welcome, Ronaldo!"

// String methods
let text = "JavaScript";
console.log(text.length);           // 10
console.log(text.toUpperCase());    // "JAVASCRIPT"
console.log(text.toLowerCase());    // "javascript"
console.log(text.charAt(0));        // "J"
console.log(text.indexOf("Script")); // 4
console.log(text.slice(0, 4));      // "Java"
console.log(text.substring(4, 10)); // "Script"
console.log(text.split(""));        // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
```

### Arrays
```javascript
let numbers = [1, 2, 3, 4, 5];

// Access elements
console.log(numbers[0]);        // 1
console.log(numbers.length);    // 5

// Array methods
numbers.push(6);                // Add to end
numbers.pop();                  // Remove from end
numbers.shift();                // Remove from start
numbers.unshift(0);             // Add to start
numbers.indexOf(3);             // 2
numbers.includes(4);            // true
numbers.join(", ");             // "1, 2, 3, 4, 5"

// Map, filter, reduce
let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((a, b) => a + b, 0);
```

### Objects
```javascript
let player = {
    name: "Ronaldo",
    age: 40,
    position: "Forward",
    goals: 890,
    teams: ["Sporting", "Manchester", "Real Madrid"],
    stats: {
        matches: 1200,
        assists: 250
    }
};

// Access properties
console.log(player.name);           // "Ronaldo"
console.log(player["age"]);         // 40
console.log(player.stats.matches);  // 1200

// Add/modify properties
player.year = 1985;
player.goals = 891;

// Delete property
delete player.year;

// Check property
console.log("name" in player);      // true
```

### Loops
```javascript
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// do...while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// for...of loop (iterate values)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);  // "red", "green", "blue"
}

// for...in loop (iterate keys)
let person = { name: "Ronaldo", age: 40 };
for (let key in person) {
    console.log(key, person[key]);
}
```

### Conditionals
```javascript
// if...else
if (age > 18) {
    console.log("Adult");
} else if (age > 13) {
    console.log("Teen");
} else {
    console.log("Child");
}

// Ternary operator
let status = age > 18 ? "Adult" : "Minor";

// Switch statement
switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("End of week");
        break;
    default:
        console.log("Midweek");
}
```

### Functions
```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function call
console.log(greet("Ronaldo")); // "Hello, Ronaldo!"

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3));  // 8

// Function with default parameters
function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5));    // 10
console.log(multiply(5, 3)); // 15

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

## Learning Outcomes
✅ Understand JavaScript variables and data types
✅ Work with strings, arrays, and objects
✅ Master loops and conditionals
✅ Write and call functions
✅ Use arrow functions
✅ Understand template literals

## Common Mistakes
❌ Using `var` instead of `let`/`const`
❌ Redeclaring variables with `let` in same scope
❌ Forgetting `return` statement in functions
❌ Confusing `=` (assignment) with `==` (comparison)
❌ Not understanding `this` context

## Best Practices
✅ Use `const` by default, `let` when needed, never `var`
✅ Write descriptive variable names
✅ Use arrow functions for callbacks
✅ Comment complex logic
✅ Use template literals over concatenation

## Next Steps
→ Move to **Day 25 Z** to learn Node.js basics

---

*JavaScript is the language of the web - master it and you can build anything!* 💻

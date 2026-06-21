# Day 35 Node - Node.js in Action

## Overview
Run and execute Node.js code with practical demonstrations.

## Files in This Project

### 📄 `index.html`
Reference HTML file

### ⚙️ `script.js`
Node.js execution demonstrations

## Running Node.js

```bash
# Run a file
node script.js

# Interactive REPL
node

# Exit REPL
.exit
```

## Node.js vs Browser JavaScript

| Feature | Node.js | Browser |
|---------|---------|---------|
| Access Files | Yes (fs module) | No (security) |
| Access OS | Yes (os module) | No |
| Global Object | global | window |
| Modules | CommonJS/ES6 | ES6 modules |
| Network | Yes | Yes (fetch/CORS) |
| DOM | No | Yes |

## Global Object

```javascript
// Node.js global object
console.log(global);

// Global properties
console.log(__dirname);   // Current directory
console.log(__filename);  // Current file path
console.log(process);     // Process information
```

## Process Object

```javascript
// Process information
console.log(process.version);        // Node version
console.log(process.platform);       // OS platform
console.log(process.argv);           // Command arguments
console.log(process.cwd());          // Current working directory
console.log(process.env.NODE_ENV);   // Environment variables

// Exit process
process.exit(0);  // 0 = success
```

## Destructuring

```javascript
// Destructure array
let [a, b, c] = [1, 2, 3];
console.log(a);  // 1

// Destructure object
let { name, age } = { name: "John", age: 30, city: "NYC" };
console.log(name);  // "John"

// Nested destructuring
let { person: { firstName, lastName } } = {
    person: {
        firstName: "John",
        lastName: "Doe"
    }
};
```

## Async Functions in Node.js

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();
```

## Node.js Modules (Preview)

```javascript
// Export from module
module.exports = {
    greet: (name) => `Hello, ${name}!`,
    add: (a, b) => a + b
};

// Import in another file
const myModule = require('./module');
console.log(myModule.greet("World"));
```

## Learning Outcomes
✅ Run Node.js scripts
✅ Understand global objects
✅ Access process information
✅ Use destructuring
✅ Work with async functions in Node
✅ Prepare for modules and packages

## Common Node.js Tasks
- File system operations (fs module)
- HTTP server creation (http module)
- Path manipulation (path module)
- OS information (os module)
- Package management (npm)

## Next Steps
→ Move to **Day 36** to learn about modules and exports

---

*Node.js extends JavaScript to the server-side!* 🖥️

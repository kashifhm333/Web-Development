# Day 36 - Node.js Modules & Exports

## Overview
Learn to organize code into reusable modules with exports and imports.

## Files in This Project

### ⚙️ `main.js`
Main entry file demonstrating module usage

### 📄 `common.js`
Common utilities module

### 📄 `E.js`
Example module with exports

### 📦 `package.json`
Project configuration

## CommonJS Modules (Traditional)

### Exporting with module.exports

#### Export Single Function
```javascript
// math.js
function add(a, b) {
    return a + b;
}

module.exports = add;
```

```javascript
// main.js
const add = require('./math');
console.log(add(5, 3));  // 8
```

#### Export Multiple Functions
```javascript
// utils.js
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};
```

```javascript
// main.js
const utils = require('./utils');
console.log(utils.add(10, 5));       // 15
console.log(utils.subtract(10, 5));  // 5
```

#### Export Class
```javascript
// User.js
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    display() {
        return `${this.name} (${this.email})`;
    }
}

module.exports = User;
```

```javascript
// main.js
const User = require('./User');
const user = new User("John", "john@example.com");
console.log(user.display());
```

## ES6 Modules (Modern)

### Using import/export

#### Default Export
```javascript
// greeting.js
export default function greet(name) {
    return `Hello, ${name}!`;
}
```

```javascript
// main.js
import greet from './greeting.js';
console.log(greet("World"));
```

#### Named Exports
```javascript
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;
```

```javascript
// main.js
import { add, subtract, PI } from './math.js';
console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2
console.log(PI);             // 3.14159
```

#### Import All
```javascript
import * as math from './math.js';
console.log(math.add(5, 3));
console.log(math.PI);
```

#### Mix Default and Named
```javascript
// operations.js
export default function calculate(a, b, op) {
    if (op === 'add') return a + b;
    if (op === 'sub') return a - b;
}

export function validate(a, b) {
    return typeof a === 'number' && typeof b === 'number';
}
```

```javascript
// main.js
import calculate, { validate } from './operations.js';
console.log(calculate(5, 3, 'add'));
console.log(validate(5, 3));
```

## Package.json

### Specifying Module Type
```json
{
    "name": "my-project",
    "version": "1.0.0",
    "type": "module",
    "main": "index.js",
    "scripts": {
        "start": "node index.js"
    }
}
```

Adding `"type": "module"` enables ES6 modules.

## Practical Module Examples

### Logger Module
```javascript
// logger.js
export function log(message) {
    console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
}

export function error(message) {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
}

export function warn(message) {
    console.warn(`[WARN] ${new Date().toISOString()}: ${message}`);
}
```

```javascript
// main.js
import * as logger from './logger.js';
logger.log("Application started");
logger.warn("This is a warning");
logger.error("An error occurred");
```

### Configuration Module
```javascript
// config.js
export default {
    database: {
        host: 'localhost',
        port: 5432,
        name: 'myapp'
    },
    server: {
        port: 3000,
        env: 'development'
    },
    api: {
        timeout: 5000,
        retries: 3
    }
};
```

```javascript
// main.js
import config from './config.js';
console.log(config.server.port);      // 3000
console.log(config.database.host);    // localhost
```

### User Management Module
```javascript
// userManager.js
let users = [];

export function addUser(name, email) {
    users.push({ id: users.length + 1, name, email });
}

export function getUsers() {
    return users;
}

export function getUser(id) {
    return users.find(u => u.id === id);
}

export function deleteUser(id) {
    users = users.filter(u => u.id !== id);
}

export function updateUser(id, updates) {
    let user = users.find(u => u.id === id);
    if (user) Object.assign(user, updates);
}
```

```javascript
// main.js
import * as userManager from './userManager.js';

userManager.addUser("John", "john@example.com");
userManager.addUser("Jane", "jane@example.com");

console.log(userManager.getUsers());
console.log(userManager.getUser(1));

userManager.updateUser(1, { name: "Jonathan" });
console.log(userManager.getUser(1));
```

### File Operations Module
```javascript
// fileOps.js
import fs from 'fs';
import path from 'path';

export function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

export function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content);
}

export function appendFile(filePath, content) {
    fs.appendFileSync(filePath, content);
}

export function fileExists(filePath) {
    return fs.existsSync(filePath);
}
```

## Module Organization

### Folder Structure
```
project/
├── main.js
├── package.json
├── modules/
│   ├── logger.js
│   ├── config.js
│   ├── utils.js
│   └── database.js
└── data/
    └── users.json
```

### Index File Pattern
```javascript
// modules/index.js
export { default as logger } from './logger.js';
export { default as config } from './config.js';
export * as utils from './utils.js';
```

```javascript
// main.js
import { logger, config, utils } from './modules/index.js';
```

## Learning Outcomes
✅ Create and export modules
✅ Import and use modules
✅ Understand CommonJS vs ES6 modules
✅ Organize code into reusable modules
✅ Use package.json configuration
✅ Structure large projects with modules

## Common Mistakes
❌ Mixing CommonJS and ES6 modules
❌ Circular dependencies
❌ Not configuring package.json for module type
❌ Forgotten file extensions (.js)
❌ Not updating exports when changing modules

## Best Practices
✅ One export per file (or use named exports)
✅ Use meaningful module names
✅ Organize by feature or functionality
✅ Keep modules focused and single-purpose
✅ Use index.js for module aggregation
✅ Document module exports

## Next Steps
→ Move to **Day 37** to learn about file system operations

---

*Modules are the building blocks of scalable Node.js applications!* 🧩

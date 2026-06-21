# Day 37 - File System Operations (fs Module)

## Overview
Learn to read, write, and manipulate files in Node.js using the fs (file system) module.

## Files in This Project

### ⚙️ `main.js`
File system demonstrations

### 📄 `path.js`
Path module usage

### ⚙️ `e.js`
Additional examples

### 📦 `package.json`
Project configuration

### 📄 `hello.txt`, `hello2.txt`
Sample text files

## File System Module

### Importing fs
```javascript
import fs from 'fs';
// or CommonJS
const fs = require('fs');
```

## Reading Files

### readFileSync (Blocking)
```javascript
// Synchronous - blocks execution
const content = fs.readFileSync('hello.txt', 'utf8');
console.log(content);
```

### readFile (Non-blocking)
```javascript
// Asynchronous - doesn't block
fs.readFile('hello.txt', 'utf8', (error, content) => {
    if (error) {
        console.error("Error reading file:", error);
        return;
    }
    console.log(content);
});
```

### readFile with Promises
```javascript
const fs = require('fs').promises;

async function readFileAsync() {
    try {
        const content = await fs.readFile('hello.txt', 'utf8');
        console.log(content);
    } catch (error) {
        console.error("Error:", error);
    }
}

readFileAsync();
```

## Writing Files

### writeFileSync (Blocking)
```javascript
fs.writeFileSync('output.txt', 'Hello, World!');
```

### writeFile (Non-blocking)
```javascript
fs.writeFile('output.txt', 'Hello, World!', (error) => {
    if (error) {
        console.error("Error writing file:", error);
        return;
    }
    console.log("File written successfully");
});
```

### writeFile with Promises
```javascript
const fs = require('fs').promises;

async function writeFileAsync() {
    try {
        await fs.writeFile('output.txt', 'Hello, World!');
        console.log("File written");
    } catch (error) {
        console.error("Error:", error);
    }
}

writeFileAsync();
```

## Appending to Files

### appendFileSync (Blocking)
```javascript
fs.appendFileSync('log.txt', 'New log entry\n');
```

### appendFile (Non-blocking)
```javascript
fs.appendFile('log.txt', 'New log entry\n', (error) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("Appended to file");
});
```

## Checking Files

### Check if File Exists
```javascript
// Older method
if (fs.existsSync('hello.txt')) {
    console.log("File exists");
}

// Modern method
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'hello.txt');
fs.promises.access(filePath)
    .then(() => console.log("File exists"))
    .catch(() => console.log("File not found"));
```

## File Metadata

### Get File Stats
```javascript
fs.stat('hello.txt', (error, stats) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    
    console.log("File size:", stats.size);
    console.log("Is file:", stats.isFile());
    console.log("Is directory:", stats.isDirectory());
    console.log("Created:", stats.birthtime);
    console.log("Modified:", stats.mtime);
});
```

## Directory Operations

### List Files in Directory
```javascript
fs.readdir('.', (error, files) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    
    files.forEach(file => {
        console.log(file);
    });
});
```

### Create Directory
```javascript
fs.mkdir('myFolder', (error) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("Directory created");
});

// Recursive
fs.mkdir('path/to/folder', { recursive: true }, (error) => {
    if (error) console.error(error);
});
```

### Delete Directory
```javascript
fs.rmdir('myFolder', (error) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("Directory deleted");
});
```

## File Operations

### Delete File
```javascript
fs.unlink('file.txt', (error) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("File deleted");
});
```

### Rename/Move File
```javascript
fs.rename('oldname.txt', 'newname.txt', (error) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("File renamed");
});
```

### Copy File
```javascript
fs.copyFile('source.txt', 'destination.txt', (error) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("File copied");
});
```

## Path Module

### Working with Paths
```javascript
import path from 'path';

// Get file extension
console.log(path.extname('file.txt'));  // .txt

// Get file name
console.log(path.basename('path/to/file.txt'));  // file.txt

// Get directory
console.log(path.dirname('path/to/file.txt'));  // path/to

// Join paths
console.log(path.join('path', 'to', 'file.txt'));  // path/to/file.txt

// Resolve absolute path
console.log(path.resolve('file.txt'));  // /full/path/to/file.txt

// Get directory name
console.log(__dirname);  // Current directory
```

## Practical Examples

### Logger with File Writing
```javascript
const fs = require('fs').promises;
const path = require('path');

async function log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${level}: ${message}\n`;
    const logFile = path.join(process.cwd(), 'app.log');
    
    try {
        await fs.appendFile(logFile, logMessage);
    } catch (error) {
        console.error("Error writing log:", error);
    }
}

log("Application started");
log("Processing data", "DEBUG");
log("An error occurred", "ERROR");
```

### Read and Process CSV
```javascript
const fs = require('fs').promises;

async function processCSV(filename) {
    try {
        const content = await fs.readFile(filename, 'utf8');
        const lines = content.split('\n');
        
        const headers = lines[0].split(',');
        const data = lines.slice(1).map(line => {
            const values = line.split(',');
            return headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {});
        });
        
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

processCSV('data.csv');
```

### Backup Files
```javascript
const fs = require('fs').promises;
const path = require('path');

async function backupFile(filename) {
    try {
        const content = await fs.readFile(filename, 'utf8');
        const backupName = `${filename}.backup`;
        await fs.writeFile(backupName, content);
        console.log(`Backed up to ${backupName}`);
    } catch (error) {
        console.error("Backup error:", error);
    }
}

backupFile('important.txt');
```

## Learning Outcomes
✅ Read files synchronously and asynchronously
✅ Write and append to files
✅ Check file existence and metadata
✅ Manage directories
✅ Use path module for file paths
✅ Handle file operations with error handling
✅ Create practical file-based utilities

## Common Mistakes
❌ Using synchronous methods in production (blocks)
❌ Not handling encoding (utf8)
❌ Forgetting error handling
❌ Using hardcoded paths instead of path.join()
❌ Not checking file existence before operations

## Best Practices
✅ Use async methods (readFile, not readFileSync)
✅ Always handle errors with try/catch
✅ Use path module for cross-platform paths
✅ Use fs.promises for cleaner code
✅ Close files properly when needed
✅ Be mindful of file permissions

## Next Steps
→ Move to **Day 38** to learn about Express.js

---

*File system operations are crucial for building server applications!* 📁

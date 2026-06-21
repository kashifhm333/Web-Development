# Day 38 Express - Express.js Basics

## Overview
Build web servers and APIs with Express.js - the most popular Node.js framework.

## Files in This Project

### ⚙️ `main.js`
Express server setup

### 📦 `package.json`
Project dependencies

### 📁 `public/`
Static files directory

## What is Express.js?

Express.js is a web framework for Node.js that simplifies:
- Creating HTTP servers
- Routing
- Middleware
- Request/response handling

## Installation

```bash
npm install express
```

## Basic Express Server

### Hello World
```javascript
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

## Routing

### GET Request
```javascript
app.get('/users', (req, res) => {
    res.send('Get all users');
});
```

### POST Request
```javascript
app.post('/users', (req, res) => {
    res.send('Create new user');
});
```

### PUT Request
```javascript
app.put('/users/:id', (req, res) => {
    res.send(`Update user ${req.params.id}`);
});
```

### DELETE Request
```javascript
app.delete('/users/:id', (req, res) => {
    res.send(`Delete user ${req.params.id}`);
});
```

## Route Parameters

### Path Parameters
```javascript
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

app.get('/users/:id/posts/:postId', (req, res) => {
    const { id, postId } = req.params;
    res.send(`User ${id}, Post ${postId}`);
});
```

### Query Parameters
```javascript
app.get('/search', (req, res) => {
    const query = req.query.q;
    const limit = req.query.limit;
    res.send(`Search: ${query}, Limit: ${limit}`);
});

// /search?q=javascript&limit=10
```

## Static Files

### Serve Static Content
```javascript
app.use(express.static('public'));

// Now access files as:
// http://localhost:3000/index.html
// http://localhost:3000/style.css
```

### Serve from Multiple Directories
```javascript
app.use(express.static('public'));
app.use(express.static('images'));
```

## Middleware

### Body Parser Middleware
```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    res.send(`Received: ${name}, ${email}`);
});
```

### Custom Middleware
```javascript
// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();  // Continue to next middleware/route
});
```

### Error Middleware
```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});
```

## Response Methods

### Send Text
```javascript
app.get('/', (req, res) => {
    res.send('Hello World');
});
```

### Send JSON
```javascript
app.get('/api/users', (req, res) => {
    res.json({ id: 1, name: 'John', email: 'john@example.com' });
});
```

### Send File
```javascript
app.get('/file', (req, res) => {
    res.sendFile('/path/to/file.txt');
});
```

### Send HTML
```javascript
app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>');
});
```

### Redirect
```javascript
app.get('/old-route', (req, res) => {
    res.redirect('/new-route');
});
```

### Status Codes
```javascript
app.post('/create', (req, res) => {
    res.status(201).json({ message: 'Created' });
});

app.get('/error', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});
```

## Complete Server Example

```javascript
import express from 'express';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// Sample data
let users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' }
];

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Express API');
});

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email required' });
    }
    
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    
    res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    
    const deleted = users.splice(index, 1);
    res.json(deleted[0]);
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```

## Learning Outcomes
✅ Create Express servers
✅ Define routes (GET, POST, PUT, DELETE)
✅ Handle route parameters and query strings
✅ Serve static files
✅ Use middleware
✅ Return JSON responses
✅ Handle HTTP status codes
✅ Build basic REST APIs

## Common Mistakes
❌ Forgetting `next()` in middleware
❌ Not parsing request body (missing middleware)
❌ Incorrect route order
❌ Not handling errors
❌ Missing status codes

## Best Practices
✅ Use middleware for cross-cutting concerns
✅ Organize routes logically
✅ Always handle errors
✅ Use appropriate HTTP methods
✅ Validate input data
✅ Use consistent naming

## Next Steps
→ Move to **Day 39** to learn advanced Express routing

---

*Express.js is the backbone of most Node.js applications!* 🚀

# Day 31 - Fetch API & HTTP Requests

## Overview
Learn to fetch data from servers using the Fetch API - essential for modern web development.

## Files in This Project

### ⚙️ `fetch.js`
Fetch API demonstrations

### 📄 `index.html`
HTML for displaying fetched data

### 🖥️ `server.js`
Simple server for testing

## Introduction to Fetch API

The Fetch API allows you to make HTTP requests from JavaScript.

```javascript
// Basic fetch
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## GET Request

### Simple GET
```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => console.log(data));
```

### GET with Error Handling
```javascript
fetch('https://api.example.com/users/1')
    .then(response => {
        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("User:", data);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
```

## POST Request

### Send Data to Server
```javascript
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John',
        email: 'john@example.com'
    })
})
    .then(response => response.json())
    .then(data => console.log("Created:", data))
    .catch(error => console.error(error));
```

## PUT Request

### Update Data
```javascript
fetch('https://api.example.com/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Jane Updated',
        email: 'jane@example.com'
    })
})
    .then(response => response.json())
    .then(data => console.log("Updated:", data));
```

## DELETE Request

### Delete Data
```javascript
fetch('https://api.example.com/users/1', {
    method: 'DELETE'
})
    .then(response => response.json())
    .then(data => console.log("Deleted:", data));
```

## Response Methods

### response.json()
```javascript
fetch(url)
    .then(response => response.json())  // Parse as JSON
    .then(data => console.log(data));
```

### response.text()
```javascript
fetch(url)
    .then(response => response.text())  // Get as text
    .then(text => console.log(text));
```

### response.blob()
```javascript
fetch(url)
    .then(response => response.blob())  // Get as binary
    .then(blob => console.log(blob));
```

### Check Response Status
```javascript
fetch(url)
    .then(response => {
        console.log(response.status);    // 200, 404, etc.
        console.log(response.statusText); // "OK", "Not Found"
        console.log(response.ok);        // true if 200-299
        return response.json();
    });
```

## Async/Await (Modern Approach)

### Simple Async Fetch
```javascript
async function fetchUser() {
    const response = await fetch('https://api.example.com/users/1');
    const data = await response.json();
    console.log(data);
}

fetchUser();
```

### With Error Handling
```javascript
async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/users/1');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("User:", data);
        return data;
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchUserData();
```

### POST with Async/Await
```javascript
async function createUser(userData) {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        const data = await response.json();
        console.log("Created:", data);
        return data;
        
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

createUser({ name: 'John', email: 'john@example.com' });
```

## Practical Examples

### Fetch and Display Data
```javascript
async function displayUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        let html = '<ul>';
        users.forEach(user => {
            html += `<li>${user.name} (${user.email})</li>`;
        });
        html += '</ul>';
        
        document.getElementById('userList').innerHTML = html;
        
    } catch (error) {
        console.error("Error:", error);
        document.getElementById('userList').innerHTML = 'Error loading users';
    }
}

displayUsers();
```

### Fetch with Loading State
```javascript
async function fetchData(url) {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    
    try {
        loader.style.display = 'block';
        content.innerHTML = '';
        
        const response = await fetch(url);
        const data = await response.json();
        
        content.innerHTML = JSON.stringify(data, null, 2);
        
    } catch (error) {
        content.innerHTML = `Error: ${error.message}`;
        
    } finally {
        loader.style.display = 'none';
    }
}
```

### Multiple Requests
```javascript
async function fetchMultiple() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetch('https://api.example.com/users').then(r => r.json()),
            fetch('https://api.example.com/posts').then(r => r.json()),
            fetch('https://api.example.com/comments').then(r => r.json())
        ]);
        
        console.log("Users:", users);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
        
    } catch (error) {
        console.error("Error:", error);
    }
}
```

## Request Headers

### Custom Headers
```javascript
fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123',
        'X-Custom-Header': 'value'
    }
});
```

### Sending Form Data
```javascript
let formData = new FormData();
formData.append('name', 'John');
formData.append('email', 'john@example.com');

fetch('https://api.example.com/upload', {
    method: 'POST',
    body: formData
    // Don't set Content-Type header, browser will do it
});
```

## CORS (Cross-Origin Resource Sharing)

### CORS Request
```javascript
fetch('https://different-domain.com/api/data', {
    method: 'GET',
    mode: 'cors',  // Enable CORS
    headers: {
        'Content-Type': 'application/json'
    }
});
```

## Learning Outcomes
✅ Make GET, POST, PUT, DELETE requests
✅ Handle JSON responses
✅ Use async/await for cleaner code
✅ Handle errors properly
✅ Use Promise.all for multiple requests
✅ Send custom headers
✅ Handle loading states

## Common Mistakes
❌ Forgetting await in async function
❌ Not checking response.ok
❌ Not parsing response (json(), text(), etc.)
❌ CORS errors without understanding
❌ Forgetting error handling

## Best Practices
✅ Always use try/catch with async/await
✅ Check response.ok before processing
✅ Add loading and error states
✅ Use Promise.all for parallel requests
✅ Set appropriate headers
✅ Handle timeouts
✅ Log errors for debugging

## Next Steps
→ Move to **Day 32** to learn about Promises

---

*Fetch API is essential for building interactive web applications!* 🌐

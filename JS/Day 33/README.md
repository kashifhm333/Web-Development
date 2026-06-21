# Day 33 - Async/Await

## Overview
Master async/await - the modern, clean way to handle asynchronous operations.

## Files in This Project

### 📄 `index.html`
HTML with async operations

### ⚙️ `script.js`
Async/await demonstrations

## What is Async/Await?

Async/await is syntactic sugar built on Promises that makes asynchronous code look and behave more like synchronous code.

## Async Functions

### Basic Async Function
```javascript
async function myAsyncFunction() {
    return "Hello!";
}

myAsyncFunction().then(result => console.log(result));  // "Hello!"
```

### Async Always Returns Promise
```javascript
async function demo() {
    return 42;
}

let result = demo();  // Returns Promise
console.log(result);  // Promise { 42 }

result.then(value => console.log(value));  // 42
```

## Await Keyword

### Basic Await
```javascript
async function getData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

// Call async function
getData().then(data => console.log(data));
```

### Await Pauses Execution
```javascript
async function demo() {
    console.log("1");
    
    const result = await new Promise(resolve => {
        setTimeout(() => resolve("2"), 2000);
    });
    
    console.log(result);  // Waits 2 seconds
    console.log("3");
}

demo();
// Logs:
// 1
// (2 second delay)
// 2
// 3
```

## Error Handling

### Try/Catch
```javascript
async function fetchUser() {
    try {
        const response = await fetch('https://api.example.com/users/1');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const user = await response.json();
        console.log("User:", user);
        return user;
        
    } catch (error) {
        console.error("Error:", error.message);
        // Handle error
    }
}

fetchUser();
```

### Try/Catch/Finally
```javascript
async function fetchData() {
    let loader = document.getElementById('loader');
    
    try {
        loader.style.display = 'block';
        
        const response = await fetch(url);
        const data = await response.json();
        
        console.log(data);
        return data;
        
    } catch (error) {
        console.error("Error:", error);
        
    } finally {
        loader.style.display = 'none';
    }
}
```

## Async Function Patterns

### Sequential Operations
```javascript
async function processSequentially() {
    const user = await getUser(1);
    console.log("Got user:", user);
    
    const posts = await getPosts(user.id);
    console.log("Got posts:", posts);
    
    const comments = await getComments(posts[0].id);
    console.log("Got comments:", comments);
    
    return { user, posts, comments };
}

processSequentially();
```

### Parallel Operations
```javascript
async function processInParallel() {
    // Run all in parallel - more efficient
    const [users, posts, comments] = await Promise.all([
        fetch('https://api.example.com/users').then(r => r.json()),
        fetch('https://api.example.com/posts').then(r => r.json()),
        fetch('https://api.example.com/comments').then(r => r.json())
    ]);
    
    console.log({ users, posts, comments });
}

processInParallel();
```

### Race Condition
```javascript
async function raceOperations() {
    const firstToComplete = await Promise.race([
        fetch(url1).then(r => r.json()),
        fetch(url2).then(r => r.json()),
        fetch(url3).then(r => r.json())
    ]);
    
    console.log("First response:", firstToComplete);
}
```

## Practical Examples

### Fetch with Retry
```javascript
async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return await response.json();
            
        } catch (error) {
            if (i === retries - 1) throw error;
            
            console.log(`Retry ${i + 1}/${retries}`);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

fetchWithRetry('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error("Failed:", error));
```

### Search with Debounce
```javascript
async function searchUsers(query) {
    if (!query) return [];
    
    try {
        const response = await fetch(
            `https://api.example.com/users?search=${query}`
        );
        const users = await response.json();
        return users;
        
    } catch (error) {
        console.error("Search error:", error);
        return [];
    }
}

let searchTimeout;
let searchInput = document.getElementById('search');

searchInput.addEventListener('input', async (e) => {
    clearTimeout(searchTimeout);
    
    searchTimeout = setTimeout(async () => {
        const results = await searchUsers(e.target.value);
        console.log("Results:", results);
        // Display results
    }, 300);  // Wait 300ms after user stops typing
});
```

### Upload File with Progress
```javascript
async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
        const xhr = new XMLHttpRequest();
        
        // Progress event
        xhr.upload.addEventListener('progress', (e) => {
            const percent = (e.loaded / e.total) * 100;
            console.log(`Upload progress: ${percent}%`);
        });
        
        // Create promise wrapper
        const response = await new Promise((resolve, reject) => {
            xhr.onload = () => resolve(xhr.response);
            xhr.onerror = () => reject(new Error("Upload failed"));
            
            xhr.open('POST', 'https://api.example.com/upload');
            xhr.send(formData);
        });
        
        console.log("Uploaded:", response);
        
    } catch (error) {
        console.error("Upload error:", error);
    }
}
```

### Fetch Multiple with Fallback
```javascript
async function fetchWithFallback(...urls) {
    for (let url of urls) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.log(`Failed: ${url}`);
        }
    }
    
    throw new Error("All requests failed");
}

fetchWithFallback(
    'https://api1.com/data',
    'https://api2.com/data',
    'https://api3.com/data'
)
    .then(data => console.log("Success:", data))
    .catch(error => console.error("All failed:", error));
```

### Loop with Async
```javascript
async function processItems(items) {
    for (let item of items) {
        try {
            const result = await fetch(`/api/process/${item.id}`);
            console.log("Processed:", result);
        } catch (error) {
            console.error(`Error processing ${item.id}:`, error);
        }
    }
}
```

## Common Mistakes
❌ Forgetting `await` keyword
❌ Using `await` without `async` function
❌ Not handling errors with try/catch
❌ Sequential when parallel would be faster
❌ Awaiting non-promises

## Best Practices
✅ Always use try/catch
✅ Use Promise.all for parallel operations
✅ Keep async functions focused
✅ Avoid try/catch nesting (use .catch() if clearer)
✅ Test error scenarios
✅ Use async/await over .then() chains

## Learning Outcomes
✅ Write async functions
✅ Use await keyword properly
✅ Handle errors with try/catch
✅ Combine sequential and parallel operations
✅ Optimize async code for performance
✅ Use async with real-world APIs

## Next Steps
→ Move to **Day 34** to learn about Object-Oriented Programming with classes

---

*Async/await makes asynchronous code clean and readable!* ✨

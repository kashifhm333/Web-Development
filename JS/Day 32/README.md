# Day 32 - Promises

## Overview
Understand Promises - a fundamental concept for handling asynchronous operations in JavaScript.

## Files in This Project

### ⚙️ `promise.js`
Promise demonstrations and patterns

### 📄 `index.html`, `script.js`
HTML and JavaScript working with promises

## What are Promises?

A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Promise States
- **Pending**: Initial state, operation hasn't completed yet
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

## Creating Promises

### Promise Constructor
```javascript
let promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (success) {
        resolve(value);  // Fulfill promise
    } else {
        reject(error);   // Reject promise
    }
});
```

### Simple Promise Example
```javascript
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});

console.log(myPromise);  // Promise { pending }
```

## Consuming Promises

### then()
```javascript
promise
    .then(value => {
        console.log("Fulfilled:", value);
    });
```

### catch()
```javascript
promise
    .catch(error => {
        console.log("Rejected:", error);
    });
```

### finally()
```javascript
promise
    .finally(() => {
        console.log("Operation completed");
    });
```

### Complete Chain
```javascript
promise
    .then(value => {
        console.log("Fulfilled:", value);
        return value * 2;  // Chain continues
    })
    .then(result => {
        console.log("Chained result:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Done!");
    });
```

## Promise Chaining

### Sequential Operations
```javascript
fetch('https://api.example.com/users/1')
    .then(response => response.json())
    .then(user => {
        console.log("User:", user);
        return fetch(`https://api.example.com/users/${user.id}/posts`);
    })
    .then(response => response.json())
    .then(posts => {
        console.log("User's posts:", posts);
    })
    .catch(error => console.error("Error:", error));
```

## Promise Utilities

### Promise.resolve()
```javascript
// Create immediately resolved promise
Promise.resolve("Success")
    .then(value => console.log(value));  // "Success"
```

### Promise.reject()
```javascript
// Create immediately rejected promise
Promise.reject("Error")
    .catch(error => console.error(error));  // "Error"
```

### Promise.all()
Wait for all promises to resolve:

```javascript
let p1 = Promise.resolve(3);
let p2 = new Promise(resolve => setTimeout(() => resolve("foo"), 100));
let p3 = fetch('https://api.example.com/data').then(r => r.json());

Promise.all([p1, p2, p3])
    .then(values => {
        console.log(values);  // [3, "foo", {...}]
    })
    .catch(error => {
        console.error("Any error:", error);
    });
```

### Promise.race()
Return first resolved/rejected promise:

```javascript
let p1 = new Promise(resolve => setTimeout(() => resolve("First"), 100));
let p2 = new Promise(resolve => setTimeout(() => resolve("Second"), 50));

Promise.race([p1, p2])
    .then(value => {
        console.log(value);  // "Second" (resolves first)
    });
```

### Promise.allSettled()
Wait for all promises to settle:

```javascript
let promises = [
    Promise.resolve(1),
    Promise.reject("Error"),
    Promise.resolve(3)
];

Promise.allSettled(promises)
    .then(results => {
        console.log(results);
        // [
        //   { status: 'fulfilled', value: 1 },
        //   { status: 'rejected', reason: 'Error' },
        //   { status: 'fulfilled', value: 3 }
        // ]
    });
```

### Promise.any()
Return first fulfilled promise:

```javascript
let promises = [
    Promise.reject("Error 1"),
    Promise.resolve("Success"),
    Promise.reject("Error 2")
];

Promise.any(promises)
    .then(value => {
        console.log(value);  // "Success"
    });
```

## Practical Promise Examples

### Delay Function
```javascript
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

delay(2000)
    .then(() => console.log("2 seconds later"));
```

### Fetch with Timeout
```javascript
function fetchWithTimeout(url, timeout = 5000) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), timeout)
        )
    ]);
}

fetchWithTimeout('https://api.example.com/data', 3000)
    .then(response => response.json())
    .catch(error => console.error("Timeout or error:", error));
```

### Sequential API Calls
```javascript
function getUser(id) {
    return fetch(`https://api.example.com/users/${id}`)
        .then(r => r.json());
}

function getUserPosts(userId) {
    return fetch(`https://api.example.com/posts?userId=${userId}`)
        .then(r => r.json());
}

getUser(1)
    .then(user => {
        console.log("User:", user);
        return getUserPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
    });
```

### Retry Logic
```javascript
function retryPromise(fn, retries = 3) {
    return fn().catch(error => {
        if (retries > 1) {
            return retryPromise(fn, retries - 1);
        }
        throw error;
    });
}

retryPromise(() => fetch('https://api.example.com/data'))
    .then(response => response.json())
    .catch(error => console.error("Failed after retries:", error));
```

## Comparing Promises and Async/Await

### With Promises
```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### With Async/Await
```javascript
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData();
```

Both are valid - use based on preference. Async/await is generally more readable.

## Common Mistakes
❌ Not returning from then() for chaining
❌ Forgetting catch() for error handling
❌ Using Promise incorrectly with async/await
❌ Not understanding promise states
❌ Creating promises when functions already return them

## Best Practices
✅ Use async/await for new code
✅ Always handle errors (catch or try/catch)
✅ Return promises for chaining
✅ Use Promise.all for parallel operations
✅ Use appropriate utility (all, race, etc.)

## Learning Outcomes
✅ Understand Promise states
✅ Create and consume promises
✅ Chain promises
✅ Use Promise utilities
✅ Compare promises and async/await
✅ Handle errors in promises

## Next Steps
→ Move to **Day 33** to learn about Async/Await

---

*Promises are the foundation of asynchronous JavaScript!* 🔄

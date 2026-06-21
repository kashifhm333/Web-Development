const express = require('express');
const app = express();

// Custom middleware that logs request details
app.use((req, res, next) => {
  console.log("middleware 1");
  next(); // Pass control to next middleware
});

// Middleware for a specific route
app.use('/api', (req, res, next) => {
  console.log("middleware 2");
  next();
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(3000);
// 6-http_express.js

const express = require('express');

// Create a new Express application
const app = express();

// Define route handlers
app.get('/', (req, res) => {
  // Respond with "Hello Holberton School!" for the root path
  res.send('Hello Holberton School!\n');
});

// Handle requests for any other endpoint
app.use((req, res) => {
  // Respond with an error message for any other endpoint
  res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET ${req.url}</pre>
</body>
</html>`);
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app variable
module.exports = app;

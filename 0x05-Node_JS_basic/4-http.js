// 4-http.js

const http = require('http');

// Create small HTTP server
const app = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write response body
  res.write('Hello Holberton School!\n');

  // End response
  res.end();
});

// Set server to listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;

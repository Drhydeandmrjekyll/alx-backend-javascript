// 5-http.js

const http = require('http');
const fs = require('fs');

// Function to read the file asynchronously
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(data);
      }
    });
  });
}

// Create small HTTP server
const app = http.createServer(async (req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Handle requests based on URL path
  if (req.url === '/') {
    // Respond with "Hello Holberton School!" for root path
    res.write('Hello Holberton School!\n');
    res.end();
  } else if (req.url === '/students') {
    try {
      // Read database file asynchronously
      const data = await readFileAsync(process.argv[2]);

      // Split data into lines and filter out empty lines
      const lines = data.split('\n').filter(line => line.trim() !== '');

      // Calculate number of students
      const numberOfStudents = lines.length - 1;
      const fieldCounts = {};

      for (let i = 1; i < lines.length; i++) {
        const fields = lines[i].split(',');
        const field = fields[3];
        fieldCounts[field] = (fieldCounts[field] || 0) + 1;
      }

      // Log total number of students
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${numberOfStudents}\n`);

      // Log number of students in each field and their first names
      for (const field in fieldCounts) {
        const count = fieldCounts[field];
        const firstNames = lines
          .filter(line => line.split(',')[3] === field)
          .map(line => line.split(',')[0])
          .join(', ');
        res.write(`Number of students in ${field}: ${count}. List: ${firstNames}\n`);
      }

      res.end();
    } catch (error) {
      res.write(error.message);
      res.end();
    }
  } else {
    // Respond with 404 Not Found for other paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found\n');
    res.end();
  }
});

// Set server to listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;

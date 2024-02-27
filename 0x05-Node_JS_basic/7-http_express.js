// 7-http_express.js

const express = require('express');
const { countStudents } = require('./3-read_file_async'); // Importing the countStudents function correctly

const app = express();

// Route handler for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Route handler for the '/students' path
app.get('/students', (req, res) => {
  countStudents(req.query.db)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app variable
module.exports = app;

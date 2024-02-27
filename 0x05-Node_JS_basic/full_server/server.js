const express = require('express');
import routes from './routes/index.js';

const app = express();
const PORT = 1245;

app.use('/', routes);

// Handle invalid parameters for /students route
app.get('/students/:major', (req, res) => {
  const { major } = req.params;

  if (major === 'CS') {
    // Logic for CS students
    res.send('This is the list of our CS students...');
  } else if (major === 'SWE') {
    // Logic for SWE students
    res.send('This is the list of our SWE students...');
  } else {
    res.status(400).send('Invalid major parameter. Must be CS or SWE.');
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;

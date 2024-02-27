// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    // Read database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split data into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Calculate number of students
    const numberOfStudents = lines.length - 1; // Subtract 1 to exclude header line

    // Initialize an object to store count of students in each field
    const fieldCounts = {};

    // Loop through lines starting from index 1 (excluding the header line)
    for (let i = 1; i < lines.length; i++) {
      // Split each line into fields
      const fields = lines[i].split(',');

      // Gets field value
      const field = fields[3];

      // Increment count of students in field
      fieldCounts[field] = (fieldCounts[field] || 0) + 1;
    }

    // Log total number of students
    console.log(`Number of students: ${numberOfStudents}`);

    // Log number of students in each field and their first names
    for (const field in fieldCounts) {
      const count = fieldCounts[field];
      const firstNames = lines
        .filter(line => line.split(',')[3] === field)
        .map(line => line.split(',')[0])
        .join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${firstNames}`);
    }
  } catch (error) {
    // Handle errors if database is not available
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;


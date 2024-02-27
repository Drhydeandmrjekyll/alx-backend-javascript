// 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const numberOfStudents = lines.length - 1;
        const fieldCounts = {};

        for (let i = 1; i < lines.length; i++) {
          const fields = lines[i].split(',');
          const field = fields[3];
          fieldCounts[field] = (fieldCounts[field] || 0) + 1;
        }

        console.log(`Number of students: ${numberOfStudents}`);

        for (const field in fieldCounts) {
          const count = fieldCounts[field];
          const firstNames = lines
            .filter(line => line.split(',')[3] === field)
            .map(line => line.split(',')[0])
            .join(', ');
          console.log(`Number of students in ${field}: ${count}. List: ${firstNames}`);
        }

        resolve();
      }
    });
  });
}

module.exports = { countStudents };

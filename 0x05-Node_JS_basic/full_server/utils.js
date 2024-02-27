import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const studentsByField = {};

        for (let i = 1; i < lines.length; i++) {
          const fields = lines[i].split(',');
          const field = fields[3];
          const firstName = fields[0];

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }

          studentsByField[field].push(firstName);
        }

        resolve(studentsByField);
      }
    });
  });
};

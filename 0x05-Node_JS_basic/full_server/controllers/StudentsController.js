import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(req.filePath);
      let response = 'This is the list of our students\n';

      for (const field in studentsByField) {
        const count = studentsByField[field].length;
        const list = studentsByField[field].join(', ');
        response += `Number of students in ${field}: ${count}. List: ${list}\n`;
      }

      res.status(200).send(response);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const studentsByField = await readDatabase(req.filePath);
      const major = req.params.major.toUpperCase();

      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const list = studentsByField[major] || [];
      const response = `List: ${list.join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Cannot load the database');
    }
  }
}

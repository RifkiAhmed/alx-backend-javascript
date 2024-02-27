const fs = require('fs').promises;

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const students = data.split('\n').filter((line) => line.length > 0).slice(1);
    const fields = new Set(students.map((student) => student.split(',')[3]));
    const FieldsObj = {};
    fields.forEach((field) => {
      const fieldStudents = students.filter((student) => student.split(',')[3] === field);
      const firstNames = fieldStudents.map((student) => student.split(',')[0]);
      FieldsObj[field] = firstNames;
    });
    return FieldsObj;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;

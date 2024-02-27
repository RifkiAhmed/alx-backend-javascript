const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const students = data.split('\n').filter((line) => line.trim().length > 0).slice(1);
    console.log(`Number of students: ${students.length}`);
    const fields = new Set(students.map((student) => student.split(',')[3].trim()));
    fields.forEach((field) => {
      const fieldStudents = students.filter((student) => student.split(',')[3].trim() === field);
      const firstNames = fieldStudents.map((student) => student.split(',')[0].trim()).join(', ');
      const numberOfStudents = fieldStudents.length;
      console.log(`Number of students in ${field}: ${numberOfStudents}. List: ${firstNames}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

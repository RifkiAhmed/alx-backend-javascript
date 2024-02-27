const express = require('express');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const students = data.split('\n').filter((line) => line.length > 0).slice(1);
    let result = `Number of students: ${students.length}`;
    const fields = new Set(students.map((student) => student.split(',')[3]));
    fields.forEach((field) => {
      const fieldStudents = students.filter((student) => student.split(',')[3] === field);
      const firstNames = fieldStudents.map((student) => student.split(',')[0]).join(', ');
      const numberOfStudents = fieldStudents.length;
      result += `\nNumber of students in ${field}: ${numberOfStudents}. List: ${firstNames}`;
    });
    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentsData = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${studentsData}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(1245);

module.exports = app;

import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res){
    readDatabase(process.argv[2])
    .then((data) => {
      res.status(200);
      let message = "";
      for (let field in data) {
        message += `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
      }
      res.send(`This is the list of our students${message}`);
    })
    .catch((error) => {
      res.status(500);
      res.send(error.message);
    });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major && (major === 'CS' || major === 'SWE')) {
      readDatabase(process.argv[2])
      .then((data) => {
        res.status(200);
        res.send(`List: ${data[major].join(', ')}`);
      })
      .catch((error) => {
        res.status(500);
        res.send(error.message);
      });
    } else {
      res.status(500);
      res.send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;

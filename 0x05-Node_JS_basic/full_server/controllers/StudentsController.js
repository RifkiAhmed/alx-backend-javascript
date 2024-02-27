import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response){
    readDatabase("database.csv")
    .then((data) => {
      response.status(200);
      let message = "";
      for (let field in data) {
        message += `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
      }
      response.send(`This is the list of our students${message}`);
    })
    .catch((error) => {
      response.status(500);
      response.send(error.message);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major && (major === 'CS' || major === 'SWE')) {
      readDatabase("database.csv")
      .then((data) => {
        response.status(200);
        response.send(`List: ${data[major].join(', ')}`);
      })
      .catch((error) => {
        response.status(500);
        response.send(error.message);
      });
    } else {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;

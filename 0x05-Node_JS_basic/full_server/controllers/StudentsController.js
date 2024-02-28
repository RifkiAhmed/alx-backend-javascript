import readDatabase from '../utils';

const StudentsController = {
  getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        response.status(200);
        let message = '';
        for (const field in data) {
          if (Object.prototype.hasOwnProperty.call(data, field)) {
            message += `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
          }
        }
        response.send(`This is the list of our students${message}`);
      })
      .catch((error) => {
        response.status(500);
        response.send(error.message);
      });
  },

  getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major && (major === 'CS' || major === 'SWE')) {
      readDatabase(process.argv[2])
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
  },
};

module.exports = StudentsController;

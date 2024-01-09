export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find((newGrade) => newGrade.studentId === student.id);
      if (newGrade) {
        return { ...student, grade: newGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}

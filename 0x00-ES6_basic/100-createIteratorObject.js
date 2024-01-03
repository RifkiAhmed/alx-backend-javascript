export default function createIteratorObject(report) {
  const employeesObject = Object.values(report.allEmployees);
  const newArray = [];
  for (const line of employeesObject) {
    newArray.push(...line);
  }

  return newArray;
}

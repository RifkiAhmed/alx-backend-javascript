export default function createEmployeesObject(departmentName, employees) {
  let str = '';
  for (const employee of employees) {
    if (str === '') {
      str += `${employee}`;
    } else {
      str += `, ${employee}`;
    }
  }

  return `{ ${departmentName}: [ ${str} ] }`;
}

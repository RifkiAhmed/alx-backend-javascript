interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
};

const student1: Student = {
    firstName: 'Ahmed',
    lastName: 'RIFKI',
    age: 72,
    location: 'Morocco',
};

const student2: Student = {
    firstName: 'Adam',
    lastName: 'RAJA',
    age: 72,
    location: 'Morocco',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tr = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
th1.textContent = 'First name';
th2.textContent = 'Last name';
tr.append(th1, th2);
thead.appendChild(tr);

studentsList.forEach((student) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.textContent = student.firstName;
    td2.textContent = student.location;
    tr.append(td1, td2);
    tbody.appendChild(tr);
});

table.append(thead, tbody);
document.body.appendChild(table);

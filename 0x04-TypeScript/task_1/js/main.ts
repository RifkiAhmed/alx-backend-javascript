interface Teacher {
    firstName: string,
    lastName: string,
    location: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number;
    [key: string]: any,
};

interface Directors extends Teacher {
    numberOfReports: number,
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
    return firstName[0] + '. ' + lastName;
}

interface StudentClass {
    firstName: string;
    lastName: string;
}

class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {

    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
    return todayClass === 'Math' || todayClass === 'History'? 'Teaching ' + todayClass : '';
}

// Examples
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
// print:
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// print:
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17

console.log(printTeacher(teacher3.firstName, teacher3.lastName)); // -> J. Doe

const studentClass1 = new StudentClass('Ahmed', 'RIFKI');
console.log(studentClass1.workOnHomework()); // -> Currently working
console.log(studentClass1.displayName()); // -> Ahmed

console.log(createEmployee(200)); // -> Teacher
console.log(createEmployee(1000)); // -> Director
console.log(createEmployee('$500')); // -> Director

console.log(executeWork(createEmployee(200))); // -> Getting to work
console.log(executeWork(createEmployee(1000))); // -> Getting to director tasks

console.log(teachClass('Math')); // -> Teaching Math
console.log(teachClass('History')); // -> Teaching History


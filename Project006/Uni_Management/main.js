class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    Instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.students.push(std);
        std.registerForCourse(this.name);
    }
    addInstructor(instructor) {
        this.Instructor = instructor;
        instructor.assignCourse(this.name);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourses(course) {
        this.courses.push(course);
    }
}
let s1 = new Student("ali", 22, 45);
s1.registerForCourse("BlockChain");
s1.registerForCourse("CNC");
let s2 = new Student("alia", 33, 23);
let t1 = new Instructor("teacherr1", 23, 4445567);
let c = new Course("m1", "MetaVerse");
c.addInstructor(t1);
c.addStudent(s1);
c.addStudent(s2);
// console.log(c);
// console.log(s1);
export { Person };
export { Student };
export { Instructor };
export { Course };
export { Department };

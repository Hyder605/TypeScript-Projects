
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;

    }
    getName(){
        return this.name    }
}
class Student extends Person{
    rollNumber:number;
    courses:string[]=[];
    constructor(name:string,age:number,rollNumber:number){
        super(name,age);
        this.rollNumber=rollNumber

    }
    registerForCourse(course:string){
        this.courses.push(course)
    }
}

class Instructor extends Person{
    salary:number;
    courses:string[]=[]
    constructor(name:string,age:number,salary:number){
        super(name,age)
        this.salary=salary
    }
    assignCourse(course:string){
        this.courses.push(course)
    
    }
}
class Course{
    id:string;
    name:string;
    students:Student[]=[];
    Instructor!:Instructor;
    constructor(id:string,name:string){
        this.id=id;
        this.name=name;

    }
    addStudent(std:Student){
        this.students.push(std)
        std.registerForCourse(this.name);
    

    }
    addInstructor(instructor:Instructor){
        this.Instructor=instructor
        instructor.assignCourse(this.name)

    }


}

class Department{
    name:string;
    courses:string[]=[];    
    constructor(name:string){
        this.name=name;

    }
    addCourses(course:string){
        this.courses.push(course);
        

    }
}


let s1=new Student("ali",22,45)
s1.registerForCourse("BlockChain")
s1.registerForCourse("CNC")
let s2=new Student("alia",33,23)
let t1=new Instructor("teacherr1",23,4445567)
let c=new Course("m1","MetaVerse")
c.addInstructor(t1);
c.addStudent(s1);
c.addStudent(s2);
// console.log(c);
// console.log(s1);

export {Person}
export {Student}
export {Instructor}
export {Course}
export {Department}




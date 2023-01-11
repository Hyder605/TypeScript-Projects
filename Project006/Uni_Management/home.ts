#! /usr/bin/env node
import inquirer from "inquirer";
import {Person} from "./main.js";
import {Student} from "./main.js";
import {Instructor} from "./main.js";
import {Course} from "./main.js";
import {Department} from "./main.js";



let student_List:object[]=[]
let teacher_List:object[]=[]
let list_Course:object[]=[{id:"M1",name:"MetaVerse"},{id:"BCC",name:"BlockChain"}]
async function main(){
    let que:{usr_input:string} = await inquirer.prompt([
        {
            type: "list",
            name: "usr_input",
            message:"Enter your data",
            choices: ["1.Add Students", 
            "2.Add Courses", 
            "3.Add Teachers",
            "4.list of Students",
            "5.list of Teachers",
            ]
            
        }
        
    ]);
    
    if(que.usr_input === "1.Add Students"){
        let student_details = await inquirer.prompt([
        {
            type: "input",
            name: "usr_input",
            message:"Enter your student Name",
        },
        {
        type:"number",
        name:"usr_input1",
        message:"Enter Age of Student."
        },
        {
        type:"number",
        name:"usr_input2",
        message:"Enter Roll No."
        },
        {
        type:"list",
        name:"std_course",
        message:"Choose the Course which you want to Registered",
        choices:list_Course
        }
    
        ])
        let st1=new Student(student_details.usr_input,student_details.usr_input1,student_details.usr_input2);
        student_List.push(st1);
        st1.registerForCourse(student_details.std_course)

        //Loop=> for giving option to Assigning more courses to teacher
        do {
            
            let student_que = await inquirer.prompt([
                {
                    type: "list",
                    name: "std_courseUpdate",
                    message:"Do you want to Add more Courses",
                    choices: ["YES", 
                            "NO"
                    ]
                }
            ]);
            if(student_que.std_courseUpdate==="YES"){
                    let std_courseUpdateFurther = await inquirer.prompt(
                    {
                        type: "list",
                        name: "std_courseF",
                        message:"Choose the Course which you want to Registered",
                        choices:list_Course
                    }
                )
                st1.registerForCourse(std_courseUpdateFurther.std_courseF)


                
            }else if(student_que.std_courseUpdate==="NO"){
                return false
                
            }
            
            
        } while (true);
    };

    //Adding courses
    if(que.usr_input === "2.Add Courses"){
        let course_details= await inquirer.prompt([
        {
            type: "input",
            name: "course_input",
            message:"Enter Course ID",
        },
    {
        type:"string",
        name:"course_input1",
        message:"Enter Course Name"
    },

    
    ])
    let cor1=new Course(course_details.course_input,course_details.course_input1)
    list_Course.push(cor1)

    };

//Adding list of Students
    if(que.usr_input === "4.list of Students"){
        console.log(student_List)
       


    };

    //Adding Teacher
    if(que.usr_input === "3.Add Teachers"){
        let teacher_details = await inquirer.prompt([
        {
            type: "input",
            name: "teacher_input",
            message:"Enter your Teacher Name",
        },
    {
        type:"number",
        name:"teacher_input1",
        message:"Enter Age of Teacher."
    },
    {
        type:"number",
        name:"teacher_input2",
        message:"Enter the Salary of a Teacher."
    },
    {
        type:"list",
        name:"assg_course",
        message:"Choose the Course which you want to Assign to Teacher",
        choices:list_Course
    }
    
    
    ])
    let t1=new Instructor(teacher_details.teacher_input,teacher_details.teacher_input1,teacher_details.teacher_input1)
    teacher_List.push(t1)
    t1.assignCourse(teacher_details.assg_course)
    //Loop=> for giving option to Assigning more courses to teacher
    do {         
            let teacher_course = await inquirer.prompt([
                {
                    type: "list",
                    name: "teach_assigncourse",
                    message:"Do you want to Assign  more Courses",
                    choices: ["YES", 
                            "NO"
                    ]
                }
            ]);
            if(teacher_course.teach_assigncourse==="YES"){
                    let teacher_courseUpdate = await inquirer.prompt(
                    {
                        type: "list",
                        name: "teacher_courseF",
                        message:"Choose the Course which you want to Assign",
                        choices:list_Course
                    }
                )
                t1.assignCourse(teacher_courseUpdate.teacher_courseF)
                
            }else if(teacher_course.teach_assigncourse==="NO"){
                return false
                
            }
            
            
        } while (true);
    };




    //Adding list of Teacher
    if(que.usr_input === "5.list of Teachers"){
        console.log(teacher_List)
       


    };
    
       

    

}






do {

    await main();
    let s:boolean=true
    var repeatLoop = await inquirer.prompt({
            type: "list",
            name: "Repeat",
            message:"Do you want to continue and Perform some other Operations??",
            choices:[
                "Yes","No"
            ]
        });
    } while (repeatLoop.Repeat==="Yes");

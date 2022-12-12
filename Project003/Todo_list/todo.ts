#! /usr/bin/env node

import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";



figlet('TODO  LIST', (err, data)=>{
    console.log(chalk.green(data));
    
})
    
const sleep=(ms:number=2000)=>new Promise((r)=>{
    setTimeout(r,ms);
})

async function welcome():Promise<void>{
    let rainbowT=chalkAnimation.rainbow(`
    ---------To DO List----------
    `)
    await sleep();
    rainbowT.stop(); 
}

interface option{
    addt:string,
    fullSt:string,

}

async function structure():Promise<string>{
    let fulStructure:option=await inquirer.prompt({
        name:"fullSt",
        type:"list",
        message:chalk.green("Please Select:"),
        choices:[
            chalk.bold("1. + Add Task"),
            chalk.bold("2. List of Pending Tasks you"),
            chalk.bold("3. List Of Completed Tasks"),
            chalk.bold("4. Delete Task from Pending List"),
            chalk.bold("5. Move Task from Pending to Completed"),
            chalk.bold("6. Exit")
        ]
        
    })
    return fulStructure.fullSt;
};



async function Option1(){
    let exit=true    
    let addtask:string[]=[];
    let CompletedTask:string[]=[];


    do {
        let struc=await structure();
    if(struc===chalk.bold("1. + Add Task")){
        
        let adtsk:option=await inquirer.prompt({
            name:"addt",
            type:"input",
            message:"Please Write your Task:",
            validate:async (input:string)=>{
                if(input==="" || addtask.includes(input)){
                    if(input===""){
                        return chalk.redBright("!!!Please write something!!! ")
                    }else{
                        return chalk.redBright("The Task is already present in Pending list! Try something else")
                    }
                }
                return true
            }
        
    })
    addtask.push(adtsk.addt)  


    }else if(struc===chalk.bold("2. List of Pending Tasks you")){
        if(addtask.length>0){
            addtask.forEach((i)=>{
                let idAdd:number=(addtask.indexOf(i) + 1);
                console.log(chalk.redBright(idAdd+". "+ i));
            })
        }else{
            console.log(chalk.bgGray("Your List is Empty"));
            
        }
       
    }else if(struc===chalk.bold("3. List Of Completed Tasks")){
        if(CompletedTask.length>0){
            CompletedTask.forEach((i)=>{
                let idComp:number=(CompletedTask.indexOf(i) + 1);
                console.log(chalk.cyanBright(idComp+". "+ i));
            })
        }else{
            console.log(chalk.bgGray("Your List is Empty"));
        }
        
    }else if(struc===chalk.bold("4. Delete Task from Pending List")){
        if(addtask.length>0){
            let deltsk=await inquirer.prompt({
                name:"del",
                type:"list",
                message:"Please Choice which Task you want to delete from Pending List:",
                choices:addtask
            
            });
            addtask.splice(addtask.indexOf(deltsk.del),1) 
        }else{
            console.log(chalk.bgGray("Your List is Empty"));
        }
               
    }else if(struc===chalk.bold("5. Move Task from Pending to Completed")){
        if(addtask.length>0){
            let Movetsk=await inquirer.prompt({
                name:"move",
                type:"list",
                message:"Please Choice which Task you want to move from Pending List to Completed:",
                choices:addtask
            
            });
            CompletedTask.push(Movetsk.move)
            addtask.splice(addtask.indexOf(Movetsk.move),1)
        }else{
            console.log(chalk.bgGray("Your List is Empty"));
        }

    }else if(struc===chalk.bold("6. Exit")){
        console.log(chalk.bgBlueBright("Thank for using TODO List"));
        return exit=false
               
    }

    } while (true);
};

await welcome();
await Option1();

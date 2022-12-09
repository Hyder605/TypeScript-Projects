#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


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

async function structure(){
    let addtask=inquirer.prompt([{
        name:"addt",
        type:"list",
        message:"Please Select Add task:",
        choices:["+ Add Task"]
        
    },
    {
        name:"todo",
        type:"input",
        message:"What do you want to do?" 

    },{
        name:"date",
        type:"DATE",
        message:"Please select the Date before you want to Accomplish this Task:"

    }
    
])
}








await welcome();
await structure()

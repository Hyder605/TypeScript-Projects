#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";

const sleep=(ms=2000)=>
    new Promise((r)=>{
        setTimeout(r,ms)
});

async function welcome() {
     
    const rainbow=chalkAnimation.rainbow(`
    -----------Welcome to My Calculator-----------
                Created By Haider Ali
    `);

    await sleep();
    rainbow.stop();
    
};

async function operator(){
    const ope=await inquirer.prompt({
        name:"operate",
        type:'list',
        message:"Please choose the Operation you want to perform",
        choices:[
            '(+) Addition',
            '(-) Subtraction',
            '(X) Multiplication',
            '(/) Division',
            '(%) Modulus',
        ],
    
    });

    console.log("you choose "+ope.operate)
    const nm1=await inquirer.prompt({
        name:"nm",
        type:'number',
        message:"Please choose 1st no.",
        
    });

        const nm2=await inquirer.prompt({
        name:"nm22",
        type:'number',
        message:"Please choose 2st no.",

    });
    
    const spinner=createSpinner("calculating..\n").start();
    await sleep();
    spinner.stop();

    if(ope.operate=='(+) Addition'){
        
        spinner.success({text:chalk.green(`The Answer of the Operation ${nm1.nm+"+"+nm2.nm22}= ${Number(nm1.nm)+Number(nm2.nm22)}\n`)});

        
    }
    else if(ope.operate=='(-) Subtraction'){
        
        spinner.success({text:chalk.green(`The Answer of the Operation ${nm1.nm+"-"+nm2.nm22}= ${Number(nm1.nm)-Number(nm2.nm22)}\n`)});        

    }else if(ope.operate=='(X) Multiplication'){
        
        spinner.success({text:chalk.green(`The Answer of the Operation ${nm1.nm+"x"+nm2.nm22}= ${Number(nm1.nm)*Number(nm2.nm22)}\n`)});        

    }else if(ope.operate=='(/) Division'){
        
        spinner.success({text:chalk.green(`The Answer of the Operation ${nm1.nm+"/"+nm2.nm22}= ${Number(nm1.nm)/Number(nm2.nm22)}\n`)});        

    }else if(ope.operate=='(%) Modulus'){
        
        spinner.success({text:chalk.green(`The Answer of the Operation ${nm1.nm+"%"+nm2.nm22}= ${Number(nm1.nm)%Number(nm2.nm22)}\n`)});        
        

    }

    
    

}


async function Repeat(){
    do{
        await operator();
        var again =await inquirer.prompt({
            type:"list",
            name:"restart",
            message:chalk.red("Do you want to continue"),
            choices:[
                '(Yes) I want to perform some more Calculation ',
                '(No) Exit',
                ],
        })
    }while(again.restart =='(Yes) I want to perform some more Calculation '){
        console.log("Good Luck and have a nice day ahead")
    }

}

    
 


    
    


await welcome();

await Repeat();


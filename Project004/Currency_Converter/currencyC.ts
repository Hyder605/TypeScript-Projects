#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = ()=>new Promise((res)=>
    setTimeout(res,2000));
async function welcome() {
    let rainbowT = chalkAnimation.rainbow(`
    ---------Currency Converter----------
    `);
    await sleep();
    rainbowT.stop();
}

async function getText() {
    let myObject = await fetch("https://api.frankfurter.app/currencies");
    let myText = await myObject.json();
    return myText
}

let a=await getText()
let listCur= Object.keys(a)
let  listCurVal=Object.values(a)
let finalList:string[]=[]
for (let i in listCur &&  listCurVal){
    finalList.push(listCur[i]+ "("+listCurVal[i]+")")
    
}
async function options():Promise<string>{
    let option:{opt:string}=await inquirer.prompt({
        name:"opt",
        type:"list",
        message:chalk.blue("Please Select the Currency you want to convert"),
        choices:finalList       
        
    });

    return option.opt.slice(0,3)

}


async function amount():Promise<number>{
        let amountValue:{c1:number}=await inquirer.prompt({
        name:"c1",
        type:"number",
        message:chalk.bgBlue("Please Enter the figure you want to convert"),
        validate: async (input:number)=>{
            if(input){
                return true
            }else{
                return chalk.italic('Please Enter Correct Amount')
            }

        }
   
    });
    return amountValue.c1

};
async function CurrencyCon():Promise<string>{
    let converted:{opt2:string}=await inquirer.prompt({
        name:"opt2",
        type:"list",
        message:chalk.blue("In Which Currency you want to convert"),
        choices:finalList,
           
    });
    return converted.opt2.slice(0,3)

};

const host = 'api.frankfurter.app';
let stop:boolean
async function getcon(){
    do {
        let opt=await options()
        let amt=await amount()
        let selOpt=await CurrencyCon()
        
        let ob=await fetch(`https://${host}/latest?amount=${amt}&from=${opt}&to=${selOpt}`);
        let data=await ob.json();
        console.log(chalk.bgGreen(`${amt} ${opt} = ${data.rates[selOpt]} ${selOpt}`));
    
    let brak:{brk:string}=await inquirer.prompt({
        name:"brk",
        type:"list",
        message:chalk.red("Do you want to convert some more?"),
        choices:[
            "1. Yes",
            "2. No, Exit"
        ]
    });
    if (brak.brk==="1. Yes"){
        console.log(brak.brk);
        }else if(brak.brk==="2. No, Exit"){
        console.log(chalk.magentaBright("Thank you for using our service"));
        
        return false
    }
    
    } while (true);
    
    
        
}
    
await welcome();

await getcon();


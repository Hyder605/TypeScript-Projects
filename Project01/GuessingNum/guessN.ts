#! /usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";


const sleep = () =>
  new Promise((re) => {
    setTimeout(re, 2000);
  });

async function welcome() {
  const rainbowT = chalkAnimation.rainbow(`
    ----------Gussing Number Game--------
    `);
  await sleep();
  rainbowT.stop();
}

async function level() {
  const levelSel = await inquirer.prompt({
    name: "lst",
    type: "list",
    message: "Please Select the Level: ",
    choices: [
      "Level-Easy(Select Number between 1-10)",
      "Level-Medium(Select Number between 1-50)",
      "Level-Hard(Select Number between 1-100)",
    ],
  });
  return levelSel.lst;
}
async function Reset() {}

async function Start() {
    let counter = 9;
  let new1 = await level();
  const compNum1 = Math.floor(Math.random() * 10 + 1);
  const compNum2 = Math.floor(Math.random() * 50 + 1);
  const compNum3 = Math.floor(Math.random() * 100 + 1);
  do {
    if (new1 === "Level-Easy(Select Number between 1-10)") {
      
      const userNum = await inquirer.prompt({
        name: "nm",
        type: "number",
        message: "Please Enter your Guessing Number (1-10): ",
      });

      if (compNum1 === userNum.nm) {
        console.log(chalk.greenBright("Congratulations!You won"));
        break;
      } else if (counter > 0) {
        if (userNum.nm > compNum1) {
          console.log(chalk.red(`Try again! ` +chalk.greenBright(`Hint:`) +`Try a number less than you just Entered`));
          console.log(`Attempts Remaining:` + chalk.red(`${counter}`));
        } else {
            console.log(chalk.red(`Try again! ` +chalk.greenBright(`Hint:`) +`Try a number greater than you just Entered`));
            console.log(`Attempts Remaining:` + chalk.red(`${counter}`));
        }
      } else if (counter === 0) {
        console.log(`You Lose! The correct number was ${compNum1}`);

      }
      --counter;
    } else if (new1 === "Level-Medium(Select Number between 1-50)") {
      const userNum = await inquirer.prompt({
        name: "nm",
        type: "number",
        message: "Please Enter your Guessing Number (1-50): ",
      });

      if (compNum2 === userNum.nm) {
        console.log(chalk.greenBright("Congratulations!You won"));
        break;
      } else if (counter > 0) {
        if (userNum.nm > compNum2) {
          console.log(chalk.red(`Try again! ` +chalk.greenBright(`Hint:`) +`Try a number less than you just Entered`));
          console.log(`Attempts Remaining:` + chalk.red(`${counter}`));

        } else {
          console.log(chalk.red(`Try again! ` +chalk.greenBright(`Hint:`) +`Try a number greater than you just Entered`));
          console.log(`Attempts Remaining:` + chalk.red(`${counter}`));

        }
      } else if (counter === 0) {
        console.log(`You Lose! The correct number was ${compNum2}`);

      }
      --counter;
    } else if (new1 === "Level-Hard(Select Number between 1-100)") {
      const userNum = await inquirer.prompt({
        name: "nm",
        type: "number",
        message: "Please Enter your Guessing Number (1-100): ",
      });
      if (compNum3 === userNum.nm) {
        console.log(chalk.greenBright("Congratulations!You won"));
        break;
      } else if (counter > 0) {
        if (userNum.nm > compNum3) {
          console.log(chalk.red(`Try again! ` + chalk.greenBright(`Hint:`) +`Try a number less than you just Entered`));
          console.log(`Attempts Remaining:` + chalk.red(`${counter}`));
        } else {
          console.log(chalk.red(`Try again! ` +chalk.greenBright(`Hint:`) +`Try a number greater than you just Entered`));
          console.log(`Attempts Remaining:` + chalk.red(`${counter}`));

        }
      } else if (counter === 0) {
            console.log(`You Lose! The correct number was ${compNum3}`);

      }
      --counter;
    }
  } while (counter >= 0);
}

async function Repeat() {
    let rev=false
   do {
    
    await Start();
    const reset = await inquirer.prompt({
      name: "re",
      type: "list",
      message: "Do you want to Continue: ",
      choices: ["Yes", "No"],
    });
    if (reset.re === "Yes") {
        rev=true
        
        
        
    }
    else{
        rev=false
    }
    } while (rev){
        console.log("Thank you for playing");
        
    }
  
}

await welcome();
// await Start()
await Repeat();

#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
let sleep = new Promise((r) => {
    setTimeout(r, 2000);
});
async function welcome() {
    let rainbowT = chalkAnimation.rainbow(`
    -----------Welcome to Bank of Internet-------------
    `);
    await sleep;
    rainbowT.stop();
}
async function credentials() {
    const UserName = await inquirer.prompt({
        name: 'Uname',
        type: "input",
        message: "Please Enter your User Name:",
    });
    const Passwrd = await inquirer.prompt({
        name: "pwrd",
        type: 'number',
        message: "Please Enter you Pin code:",
    });
}
async function options() {
    const opt = await inquirer.prompt({
        name: "opts",
        type: 'list',
        message: "---Please Select the Operation you want to Perform---",
        choices: [
            "Balance Inquiry",
            "Fast Cash",
            "Cash Withdrawl",
            "Fund Transfer",
        ]
    });
    return opt.opts;
}
let TotalBalance = 100000;
async function fastCast() {
    const fcash = await inquirer.prompt({
        name: "fc",
        type: "list",
        message: "Please Select the Amount you want to Withdraw",
        choices: [
            "500",
            "1000",
            "5000",
            "10000",
        ]
    });
    return fcash.fc;
}
;
async function cashTransfer() {
    const cashT = await inquirer.prompt({
        name: "cT",
        type: "list",
        message: "Please Select the Bank you want to Transfer the Amount",
        choices: [
            "ABC Bank Limited",
            "Bank Of XYZ",
            "XYZ Bank",
        ]
    });
    console.log(`You Selected`, chalk.green(`${cashT.cT}`));
    const AccNum = await inquirer.prompt({
        name: "Acn",
        type: "number",
        message: `Please Enter the Account number of the Person you want to Transfer the Amount: `,
    });
    console.log("Please wait for 2 seconds.....");
    let wait = new Promise((r) => setTimeout(r, 2000));
    await wait;
    console.log("Account Verified");
    const amountTrans = await inquirer.prompt({
        name: "amtt",
        type: "number",
        message: "Please Enter the Amount you want to transfer: Rs. ",
    });
    console.log("Please wait....");
    let wait2 = new Promise((r) => setTimeout(r, 2000));
    await wait2;
    if (TotalBalance >= amountTrans.amtt) {
        console.log(`Rs. ${amountTrans.amtt} has been Transferred in to Account No. ${AccNum.Acn}`);
    }
    return amountTrans.amtt;
}
;
async function operations() {
    let op = await options();
    if (op === "Balance Inquiry") {
        if (TotalBalance >= 0) {
            console.log(`Your Current Balance is: ${TotalBalance}`);
        }
        else {
            console.log(`Your Current Balance is: ${0}`);
        }
    }
    else if (op === "Fast Cash") {
        let fct = await fastCast();
        if (TotalBalance >= fct) {
            if (fct === "500") {
                console.log(`Rs. ${fct} withdrawn Successfully`);
                console.log(`Your Remaining Balance is: Rs ${TotalBalance - (Number(fct))}`);
            }
            else if (fct === "1000") {
                console.log(`Rs. ${fct} withdrawn Successfully`);
                console.log(`Your Remaining Balance is: Rs ${TotalBalance - (Number(fct))}`);
            }
            else if (fct === "5000") {
                console.log(`Rs. ${fct} withdrawn Successfully`);
                console.log(`Your Remaining Balance is: Rs ${TotalBalance - (Number(fct))}`);
            }
            else if (fct === "10000") {
                console.log(`Rs. ${fct} withdrawn Successfully`);
                console.log(`Your Remaining Balance is: Rs ${TotalBalance - (Number(fct))}`);
            }
            TotalBalance = TotalBalance - fct;
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (op === "Cash Withdrawl") {
        const Cwithdrawl = await inquirer.prompt({
            name: "cw",
            type: "number",
            message: "Please Enter the Amount you want to Withdraw",
        });
        if (Cwithdrawl.cw > TotalBalance) {
            console.log("Insufficient Balance");
        }
        else {
            console.log(`Rs. ${Cwithdrawl.cw} withdrawn Successfully`);
            console.log(`Your Remaining Balance is: Rs ${TotalBalance - Cwithdrawl.cw}`);
            TotalBalance = TotalBalance - Cwithdrawl.cw;
        }
    }
    else if (op === "Fund Transfer") {
        const ctransfer = await cashTransfer();
        if (TotalBalance >= ctransfer) {
            if (TotalBalance > 0) {
                console.log(`Your Remaining Balance is: Rs ${TotalBalance - ctransfer}`);
                TotalBalance = TotalBalance - ctransfer;
            }
        }
        else {
            console.log("Insufficient Balance");
        }
    }
}
async function complete() {
    do {
        await operations();
        var exitOpton = await inquirer.prompt({
            name: 'ext',
            type: 'list',
            message: "Do you want to do more transactions?",
            choices: [
                '1. Yes',
                '2. No',
            ]
        });
    } while (exitOpton.ext === '1. Yes');
    {
        console.log("Thank you for using our Bank services ");
    }
}
await welcome();
await credentials();
await complete();

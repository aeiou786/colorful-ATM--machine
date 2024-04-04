#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

let myBalance = 10000; //dollars
let myPin = 4321;

let pinAnswer = await inquirer.prompt (
    [
        {
            name: "pin",
            message: "enter your pin ",
            type: "number",
        }
    ]
);



if (pinAnswer.pin === myPin) {
    console.log(chalk.bgGreen("\n\tcorrect pin code"));

    let operationAns = await inquirer.prompt (
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw" , "check balance"],
        
            }
        ]
    );



if (operationAns.operation === "withdraw") {
    let withdrawAns = await inquirer.prompt (
        [
            {
                name: "withdrawmethod",
                message: "select withdraw method",
                type: "list",
                choices: ["fast cash" , "enter amount"],
            }
        ]
    )
    if (withdrawAns.withdrawmethod === "fast cash") {
        let fastCashAns = await inquirer.prompt (
            [
                {
                    name: "fastCash",
                    message: "select the amount",
                    type: "list",
                    choices: [1000 , 2000 , 4000 , 6000],
                }
            ]
        )

        if (fastCashAns.fastCash > myBalance){
            console.log(chalk.bgRed("\n\tinsuficeint balance"));
        }
        else {
            myBalance -= fastCashAns.fastCash
            console.log(`${fastCashAns.fastCash} withdraw successfully`);
            console.log("your remaining balance is:" +myBalance);
        }
    }
   else if (withdrawAns.withdrawmethod === "enter amount") {
        let amountAns = await inquirer.prompt (
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                }
            ]
        );
    
        if (amountAns.amount > myBalance) {
            console.log(chalk.bgRed("\n\tinsuficeint balance"));
        }
    
    
        myBalance -= amountAns.amount;
    
        console.log("your remaining balance is:" +myBalance);
    }
  
} 

else if (operationAns.operation === "check balance") {
    console.log("your balance is: " + myBalance);
}
   
}

else {
    console.log(chalk.bgRed('\n\tincorrect pin code'));
}
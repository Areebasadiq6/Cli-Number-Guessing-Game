#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 6-10:",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("CONGRATS! YOU GUESSED RIGHT NUMBER.");
} else {
  console.log("YOU GUESSED WRONG NUMBER");
}
 
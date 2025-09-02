let rlSync = require('readline-sync')
let firstName = rlSync.question("What is your first name?\n")
let lastName = rlSync.question("What is your last name?\n")

console.log(`Hello, ${firstName} ${lastName}!`)

firstName = prompt("What is your first name?");
lastName = prompt("What is your last name?");
console.log(`Hello, ${firstName} ${lastName}!`);

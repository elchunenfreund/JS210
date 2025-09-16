const rlSync = require('readline-sync');

const age = Number(rlSync.question('What is your age? '));
const retireAge = Number(rlSync.question('At what age would you like to retire? '));

const currentYear = new Date().getFullYear()

console.log(`It's ${currentYear}. You will retire in ${currentYear + retireAge - age}.`)
console.log(`You have only ${retireAge - age} years of work to go!`)

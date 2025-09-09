const rlSync = require('readline-sync');

let bill = Number(rlSync.question('What is the bill? '));
let percentage = Number(rlSync.question('What is the tip percentage?'));

let total_tip = (bill * percentage) / 100;
let subtotal = bill + total_tip;
console.log(`The total tip is $${total_tip.toFixed(2)}`)
console.log(`The total is $${subtotal.toFixed(2)}`)

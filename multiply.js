function multiply(left, right){
  return left * right;
}

function getNumber(prompt){
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');

console.log(`${left} * ${right} = ${multiply(left, right)}`);

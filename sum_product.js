let rlSync = require('readline-sync')

let num = Number(rlSync.question('Please enter an integer greater than 0: '))
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ')
let total = 0;
if (operation === 's') {
  for(let counter = 1; counter <= num; counter++) {
    total += num
  }
  console.log(`The sum of the integers between 1 and ${num} is ${total}.`)

} else if (operation === 'p') {
  for(let counter = 0; counter < num; counter++) {
    total *= num
  }
  console.log(`The product of the integers between 1 and ${num} is ${total}.`)
}



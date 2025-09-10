let rlSync = require('readline-sync')

let num = Number(rlSync.question('Please enter an integer greater than 0: '))
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ')
if (operation === 's') {
  let total = 0;
  for(let counter = 1; counter <= num; counter++) {
    total += counter
  }
  console.log(`The sum of the integers between 1 and ${num} is ${total}.`)

} else if (operation === 'p') {
  let total = 1
  for(let counter = 1; counter <= num; counter++) {
    total *= counter
  }
  console.log(`The product of the integers between 1 and ${num} is ${total}.`)
}



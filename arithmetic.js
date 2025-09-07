const readlineSync = require('readline-sync');

console.log("Enter the first number:");
let int1 = Number(readlineSync.prompt());
console.log("Enter the second number:");
let int2 = Number(readlineSync.prompt());

console.log(`==> ${int1} + ${int2} = ${int1 + int2}`)
console.log(`==> ${int1} - ${int2} = ${int1 - int2}`)
console.log(`==> ${int1} * ${int2} = ${int1 * int2}`)
console.log(`==> ${int1} / ${int2} = ${int1 / int2}`)
console.log(`==> ${int1} % ${int2} = ${int1 % int2}`)
console.log(`==> ${int1} **  ${int2} = ${int1 ** int2}`)

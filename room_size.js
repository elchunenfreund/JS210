const rlSync = require('readline-sync')

let length = rlSync.question('Enter the length of the room in meters:\n')
let width = rlSync.question('Enter the width of the room in meters:\n')
totalMeters = Number(length) * Number(width)

console.log(`The area of the room is ${totalMeters.toFixed(2)} square meters (${(totalMeters * 10.7639).toFixed(2)}) square feet.`)

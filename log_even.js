let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// evenNum = myArray.filter(num => (num.filter(num => (num) % 2 === 0)))
// evenNum.forEach(num => console.log(num))

// LS solution
let evenNum = myArray.map(num => num % 2 === 0 ? 'even' : 'odd');

console.log(evenNum)

// LS solution
let newArray = myArray.map(function(value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});
// working solution

function logOddNumbers(num) {
  for(let counter = 1; counter <= num + 1; counter += 2) {
    console.log(counter);
  }
}

// LS solution
function logOddNumbers(number) {
  for (let currentNumber = 1; currentNumber <= number; currentNumber += 1) {
    if (currentNumber % 2 === 1) {
      console.log(currentNumber);
    }
  }
}

logOddNumbers(19);

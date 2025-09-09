function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let currentNumber = 2; currentNumber < number; currentNumber += 1) {
    if (number % currentNumber === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(num) {
  result = false
  for(let counter = 1; counter < (num / 2) + 1; counter++) {
    if (isPrime(counter) && isPrime(num - counter)) { 
      console.log(`${counter} ${num - counter}`)
      result = true
    }
  }
  if (!result) {
    console.log(null)
  }
}

checkGoldbach(3);
// logs: null
console.log('-----')
checkGoldbach(4);
// logs: 2 2
console.log('-----')
checkGoldbach(12);
// logs: 5 7
console.log('-----')
checkGoldbach(100);
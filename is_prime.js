function isPrime(num) {
  let result = !(num === 1 || num === 0)
  for(let multiple = 2; multiple < num; multiple++) {
    if (num % multiple === 0) {
      result = false;
      break;
    }
  }
  return result
}

// solution and more simple to understand

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

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(43))
console.log(isPrime(55))
console.log(isPrime(0))

function repeat(string, times) {
  let result = ''
  for (let count = 1; count <= times; count++) {
      result += string;
    }
  if (!times || times < 0 || typeof times !== 'number') {
    return undefined
  } else if (times == 0) {
    return ""
  } else {
    return result
  }
}

// LS solution 
const isCount = value => Number.isInteger(value) && value >= 0;

function repeat(string, times) {
  if (!isCount(times)) {
    return undefined;
  }

  let repeated = '';
  for (let counter = 0; counter < times; counter += 1) {
    repeated += string;
  }

  return repeated;
}

console.log(repeat('abc', 1));
console.log(repeat('abc', 2));
console.log(repeat('abc', -1));
console.log(repeat('abc', 0))
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined
function startsWith(string, searchString) {
  let result = true
  for(let counter = 0; counter < searchString.length; counter++) {
    if (string[counter] === searchString[counter]) {
      continue;
    } else {
      return false
    }
  }
  return result
}

// LS solution 
function startsWith(string, searchString) {
  for (let index = 0; index < searchString.length; index += 1) {
    if (string[index] !== searchString[index]) {
      return false;
    }
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false

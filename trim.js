function trim(string) {
  let trimmed = rightTrim(string);
  trimmed = leftTrim(trimmed);

  return trimmed;
}

function rightTrim(str) {
  let result = ''
  let copying = false
  for(let index = 0; index < str.length; index++) {
    if (str[index] === ' ' && copying === false) {
      continue;
    } else if (str[index] !== ' ') {
      copying = true;
      result += str[index];
      continue;
    }
  }
  return result
}

function leftTrim(str) {
  let result = ''
  let copying = false
  for(let index = str.length - 1; index >= 0; index -= 1) {
    if (str[index] === ' ' && copying === false) {
      continue;
    } else if (str[index] !== ' ') {
      copying = true;
      result = str[index] + result;
      continue;
    }
  }
  return result
}

console.log(trim('  abc  '))
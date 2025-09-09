function splitString(string, delimiter) {
  let result = ''
  for(let index = 0; index < string.length; index++) {
    if (delimiter === undefined) {
    console.log('ERROR: No delimiter')
        break;
    }else if (delimiter === ''){
      result = string[index]
      console.log(result)
      continue;
    } else if (string[index] === delimiter) {
      console.log(result)
      result = ''
    } else {
      result += string[index]
    }
  }
  console.log(result)
}

splitString('abc,123,hello world', ',');
splitString('hello');
splitString('hello', '');
splitString('hello', ';');
splitString(';hello;', ';');
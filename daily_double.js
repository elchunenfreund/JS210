function crunch(str) {
  let result = ''
  for(let index = 0; index < str.length; index++) {
    if (str[index] !== str[index + 1]) {
      result += str[index]
    }
  }
  return result
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

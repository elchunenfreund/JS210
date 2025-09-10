function cleanUp(str) {
  let result = ''
  for(let int = 0; int < str.length; int++) {
    if (str[int].match(/[a-zA-Z]/)) {
      result += str[int]
    } else if (result[result.length - 1] !== ' ') {
      result += ' '
    }
  }
  console.log(result)
}

cleanUp("---what's my +*& line?");    // " what s my line "

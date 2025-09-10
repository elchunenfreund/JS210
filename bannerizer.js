function logInBox(str) {
  let length = str.length;
  let frame = '+' + '-'.repeat(length + 2) + '+'
  let space = '|' + ' '.repeat(length + 2) + '|'
  let words = '| ' + str + ' |'
  console.log(frame)
  console.log(space)
  console.log(words)
  console.log(space)
  console.log(frame)
}

logInBox('To boldly go where no one has gone before.');

function generatePattern(num) {
  let result = ""
  for(let counter = 1; counter <= num; counter++) {
    result += String(counter);
    console.log(result + '*'.repeat(num - counter))
  }
}

generatePattern(10)
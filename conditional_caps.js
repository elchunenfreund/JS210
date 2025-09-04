function conditionalCaps(str) {
  if (str.length > 10) {
    return str.toUpperCase()
  } else {
    return str
  }
}

console.log(conditionalCaps('hello world'))
console.log(conditionalCaps('goodbye'))
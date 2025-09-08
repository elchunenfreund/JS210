function isXor(arg1, arg2) {
  if (arg1 && arg2) {
    return false
  } else if (arg1 || arg2) {
    return true
  } else {
    return false
  }
}

console.log(isXor(false, true))
console.log(isXor(true, false))
console.log(isXor(false, false))
console.log(isXor(true, true))

console.log(isXor(false, 3))
console.log(isXor('a', undefined))
console.log(isXor(null, ''))
console.log(isXor('2', 23))

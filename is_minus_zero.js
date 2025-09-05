function isMinusZero(int) {
  return 1 / int === -Infinity
}

// LS Solution 
function isNegativeZero(value) {
  return (value === 0) && (1 / value === -Infinity);
}
console.log(isMinusZero(-0))
console.log(isMinusZero(2))
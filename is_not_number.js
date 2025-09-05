function isNotANumber(obj) {
  return obj.toString() === 'NaN'
}

// LS solution 
function isNotANumber(obj) {
  return obj !== obj;
}
console.log(isNotANumber(NaN))
console.log(isNotANumber(34))
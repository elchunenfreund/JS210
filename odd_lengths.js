function oddLengths(arr) {
  return arr.map(arr => arr.length).filter(num => num % 2 !== 0)
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
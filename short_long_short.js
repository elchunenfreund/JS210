function shortLongShort(int1, int2) {
  if (int1.length < int2.length) {
    return int1 + int2 + int1
  } else {
    return int2 + int1 + int2
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
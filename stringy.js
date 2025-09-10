function stringy(n) {
  let result = '10'.repeat(n / 2 + 1)
  return result.slice(0, n)
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

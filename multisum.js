function multisum(int) {
  let result = 0
  for (let counter = 1; counter <= int; counter++) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      result += counter
    }
  }
  return result
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
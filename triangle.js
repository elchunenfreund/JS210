function triangle(n) {
  for(let counter = 0; counter <= n; counter++) {
    console.log(' '.repeat(n - counter) + '*'.repeat(counter));
  }
}

triangle(5);
triangle(9);

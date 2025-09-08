function logMultiples(num) {
  for(let multiple = 100; multiple >= num; multiple -= 1) {
    if (multiple % num == 0 && multiple % 2 != 0) {
      console.log(multiple);
    }
  }
}

logMultiples(17);
console.log('---')
logMultiples(21);

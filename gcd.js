function gcd(int1, int2) {
  for(let devisor = int2; ; devisor -= 1) {
    if (int1 % devisor === 0 && int2 % devisor === 0) {
      return devisor;
    } else if (devisor === 1) {
      return devisor;
    }
  }
}

// ls Solution and way fancier
function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));
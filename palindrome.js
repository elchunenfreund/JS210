function isPalindrome(str) {
  let rightStr = str.slice(0, str.length / 2)
  let leftStr = str.slice(str.length / 2)
  if (leftStr.length > rightStr.length) {
    leftStr = leftStr.slice(1)
  }

  return rightStr === leftStr.split('').reverse().join('')
}


console.log(isPalindrome('356653'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));

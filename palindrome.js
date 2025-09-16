function isPalindrome(str) {
  let leftStr = str.slice(0, str.length / 2)
  let rightStr = str.slice(str.length / 2)
  if (rightStr.length > leftStr.length) {
    rightStr = rightStr.slice(1)
  }

  return leftStr === rightStr.split('').reverse().join('')
}

function isRealPalindrome(str) {
  let stripedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  return isPalindrome(stripedStr)
}

function isPalindromicNumber(int) {
  return isPalindrome(String(int))
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

// LS Solution
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string[i]) || isNumber(string[i])) {
      result += string[i];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
 return char >= '0' && char <= '9';
}


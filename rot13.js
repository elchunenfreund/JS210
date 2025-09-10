const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function rotateArr(str, char, shift) {
  const index = str.indexOf(char);
  const effectiveIndex = (index + shift) % str.length;
  return arr[effectiveIndex];
}

function rot13(str) {
  return str
    .split('')
    .map((char) => {
      if (lowercaseAlphabet.includes(char)) {
        return rotateArr(lowercaseAlphabet, char, 13);
      } else if (uppercaseAlphabet.includes(char)) {
        return rotateArr(uppercaseAlphabet, char, 13);
      } else {
        return char;
      }
    })
    .join('');
}

// LS Solution
// function rot13(text) {
//   let transformed = '';
//   for (let index = 0; index < text.length; index += 1) {
//     transformed += rot13Character(text[index]);
//   }

//   return transformed;
// }

// function rot13Character(char) {
//   const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
//   let isUpperCase = false;
//   let initialIndex = ALPHABET.indexOf(char);

//   // no match might mean that we are dealing with an uppercase letter
//   if (initialIndex === -1) {
//     initialIndex = ALPHABET.indexOf(char.toLowerCase());
//     isUpperCase = true;
//   }

//   // if there is still no match, it's not a character between a-z
//   if (initialIndex === -1) {
//     return char;
//   }

//   let shiftedIndex = (initialIndex + 13) % 26;
//   let transformed = ALPHABET[shiftedIndex];

//   if (isUpperCase) {
//     transformed = transformed.toUpperCase();
//   }

//   return transformed;
// }

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

console.log(rot13("the quick brown fox jumps over the lazy dog."))
    // should return: "gur dhvpx oebja sbk whzcf bire gur ynml qbt."
console.log(rot13("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."))
    // should return: "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."
function doubleConsonants(str) {
  let result = '';
  for (let char of str) {
    if (char.match(/[^aeiou\d\p{P}\s]/iu)) {
      result += char + char;
    } else {
      result += char;
    }
  }
  return result;
}

function reverseNumber(int) {
  return Number(String(int).split('').reverse().join(''))
}

function centerOf(str) {
  let center = (str.length / 2)
  if (str.length < 2) {
    return str
  } else if (str.length % 2 !== 0) {
    return str.slice(center, center + 1)
  } else {
    return str.slice(center - 1, center + 1)
  }
}

function negative(int) {
  return Math.abs(number) * -1
}

function sequence(count, starInt) {
  let result = []
  for(let num = 1; num <= count; num++) {
    result.push(starInt * num)
  }
  return result
}

function swapName(str) {
  return str.split(' ').reverse().join(', ')
}

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

function reverseWords(str) {
  let wordsArr = str.split(' ');
  let result = []
  for(let word of wordsArr) {
    if (word.length >= 5) {
      result.push(word.split('').reverse().join(''))
    } else {
      result.push(word)
    }
  }
  return result.join(' ')
}

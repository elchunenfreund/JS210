'strict mode'

const obj = { text: "Remove occurances of the letter e after the word 'letter' in this sentence" }
Object.freeze(obj);

/** for loop - function name: forSolution */ 
const forSolution = (obj) => {
  let result = '';
  let wordArr = obj.text.split(' ');
  let letterIndex = wordArr.findIndex((word) =>  word === 'letter');
  result = wordArr.slice(0, letterIndex + 1).join(' ');
  let afterLetterArr = wordArr.slice(letterIndex + 1);

  for(let i = 0; i < afterLetterArr.length; i++) {
    afterLetterArr[i] = afterLetterArr[i].replaceAll('e', '')
  }

  result += ` ${afterLetterArr.join(' ')}`
  console.log(result)
}

forSolution(obj)

/** while loop - function name: whileSolution */
const whileSolution = (obj) => {
  let result = '';
  let wordArr = obj.text.split(' ');
  let letterIndex = wordArr.findIndex((word) => word === 'letter');
  result = wordArr.slice(0, letterIndex + 1).join(' ');
  let afterLetterArr = wordArr.slice(letterIndex + 1);
  let i = 0

  while(i < afterLetterArr.length) {
    afterLetterArr[i] = afterLetterArr[i].replaceAll('e', '');
    i += 1
  }

  result += ` ${afterLetterArr.join(' ')}`
  console.log(result)
}

whileSolution(obj)

/** do while loop - function name: doWhileSolution */
const doWhileSolution = (obj) => {
  let result = '';
  let wordArr = obj.text.split(' ');
  let letterIndex = wordArr.findIndex((word) => word === 'letter');
  result = wordArr.slice(0, letterIndex + 1).join(' ');
  let afterLetterArr = wordArr.slice(letterIndex + 1);
  let i = 0

  do {
    afterLetterArr[i] = afterLetterArr[i].replaceAll('e', '')
    i += 1
  } while (i < afterLetterArr.length);

  result += ` ${afterLetterArr.join(' ')}`
  console.log(result)
}

doWhileSolution(obj)

/** forEach iteration method  - function name: forEachSolution */
const forEachSolution = (obj) => {
  let result = '';
  let wordArr = obj.text.split(' ');
  let letterIndex = wordArr.findIndex((word) => word === 'letter');
  result = wordArr.slice(0, letterIndex + 1).join(' ');
  let afterLetterArr = wordArr.slice(letterIndex + 1);

  afterLetterArr.forEach((word) => {
    result += ` ${word.replaceAll('e', '')}`
  })

  console.log(result) 
}

forEachSolution(obj)

/** filter iteration method  - function name: 'filterSolution' */
const filterSolution = (obj) => {
  let result = '';
  let wordArr = obj.text.split(' ');
  let letterIndex = wordArr.findIndex((word) => word === 'letter');
  result = wordArr.slice(0, letterIndex + 1).join(' ');
  let secondPart = wordArr.slice(letterIndex + 1)
  let newSecondPart = secondPart.map((word) => {
    return word.split('').filter((char) => char !== 'e').join('');
  })

  result += ` ${newSecondPart.join(' ')}`
  console.log(result)
}

filterSolution(obj)

// map iteration method

const mapSolution = (obj) => {
  let result = '';
  let wordArr = obj.text.split(' ');
  let letterIndex = wordArr.findIndex((word) => word === 'letter');
  result = wordArr.slice(0, letterIndex + 1).join(' ');
  let secondPart = wordArr.slice(letterIndex + 1).map((word) => word.replaceAll('e', ''))

  result += ` ${secondPart.join(' ')}`
  console.log(result)
}

mapSolution(obj)

// reduce iteration method

const reduceSolution = (obj) => {
  let result = '';
  let wordArr = obj.text.split(' ');
  let letterIndex = wordArr.findIndex((word) => word === 'letter');
  result = wordArr.slice(0, letterIndex + 1).join(' ');

  let secondPart = wordArr.slice(letterIndex + 1)
  secondPart = secondPart.reduce((accumulator, element) => {
    accumulator.push(element.replaceAll('e', ''));
    return accumulator
}, [])

  result += ` ${secondPart.join(' ')}`
  console.log(result)
}

reduceSolution(obj)

function swap(str) {
  let result = [];
  let strArr = str.split(' ')
  for(let int = 0; int < strArr.length; int++) {
    let cWArr = strArr[int].split('')
    if (cWArr.length < 2) {
      result.push(cWArr.join(''))
    } else {
      [cWArr[0], cWArr[cWArr.length -1]] = [cWArr[cWArr.length -1], cWArr[0]]
      result.push(cWArr.join(''))
    }
  }
  return result.join(' ')
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
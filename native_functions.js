function push(arr, obj) {
  arr[arr.length] = obj
  return arr.length
}

function pop(arr) {
  lastElement = arr[arr.length - 1]
  arr.length = arr.length - 1
  return lastElement
}

function unshift(arr, element) {
  for(let index = arr.length; index > 0; index -= 1) {
    arr[index] = arr[index - 1]
  }
  arr[0] = element
  return arr.length
}

function shift(arr) {
  firstElement = arr[0]
  for(let index = 0; index < arr.length - 1; index++) {
    arr[index] = arr[index + 1];
  }
  arr.length = arr.length - 1
  return firstElement
}

function indexOf(arr, element) {
  for(let index = 0; index < arr.length; index++) {
    if (arr[index] === element) {
      return index
    }
  }
  return -1
}

function lastIndexOf(arr, element) {
  for(let index = arr.length - 1; index >= 0; index -= 1) {
    if (arr[index] === element) {
      return index
    }
  }
  return -1
}

function slice(arr, start, end) {
  let result = []
  for(let counter = start; counter < end; counter++) {
    push(result, arr[counter])
  }
  return result
}

function splice(arr, start, number) { 
  let result = [] 
  for(let counter = 0; counter < number; counter++) { 
    let current_index = start + counter 
    push(result, arr[current_index])
    arr[current_index] = ''
  }

  for(let counter = arr.length; counter >= start; counter -= 1) { 
    if(arr[counter] === '') { 
      arr[counter] = arr[counter + 1] 
      pop(arr) 
    } 
    } 
    return result 
  }

  // LS Solution
  function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {
    if (index < begin + number) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + number];
  }

  array.length = array.length - removedValues.length;
  return removedValues;
}

function concat(arr1, arr2) {
  result = []
  for(let int = 0; int < arr1.length; int++) {
    push(result, arr1[int])
  }

  for(let int = 0; int < arr2.length; int++) {
    push(result, arr2[int])
  }
  return result
}

function join(arr, sep) {
  result = ''
  for(let index = 0; index < arr.length - 1; index++) {
    result += String(arr[index]) + sep
  }
  result += String(arr[arr.length - 1])
  return result
}

function stringToInteger(str) {
  DIGITS = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,}
  result = 0
  strArr = str.split('')
  for(let int = 0; int < strArr.length; int++) {
    result = 10 * result + DIGITS[strArr[int]]
  }
  return result
}

function stringToSignedInteger(str) {
  DIGITS = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,}
  result = 0
  strArr = str.split('')
  let sign = 1
  if (strArr[0] === '-') {
      strArr.shift()
      sign = -1
    }
  for(let int = 0; int < strArr.length; int++) {
    result = 10 * result + DIGITS[strArr[int]]
  }
  return result * sign
}

function integerToString(int) {
  let result = ''
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  while (int > 0) {
    let remainder = int % 10
    result = DIGITS[remainder] + result
    int = Math.floor(int / 10)
  }
  return result
}

function signedIntegerToString(int) {
  if (int === 0) {
    return '0'
  }

  let sign = int < 0 ? '-' : '+'
  let result = sign + integerToString(Math.abs(int))
  return result
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"
function firstElementOf(arr) {
  return arr[0]
}

function nthElementOf(arr, index) {
  return arr[index]
}

function firstNOf(arr, count) {
  let result = []
  for(let int = 0; int < count; int++) {
    result.push(arr[int])
  }
  return result
}

// LS solution 
function firstNOf(arr, count) {
  return arr.slice(0, count);
}

function lastNOf(arr, count) {
  if (count > arr.length) {
    return arr.slice()
  }
  return arr.slice(arr.length - count);
}

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]]
}

function oddElementsOf(arr) {
  let result = []
  for(let int = 0; int < arr.length; int++) {
    if (int % 2 !== 0) {
      result.push(arr[int])
    }
  }
  return result
}

// LS Solution 
function oddElementsOf(arr) {
  let oddElements = [];
  let length = arr.length;

  for (let index = 1; index < length; index += 2) {
    oddElements.push(arr[index]);
  }

  return oddElements;
}

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse())
}

function sortDescending(arr) {
  a = arr.slice()
  let result = a.sort((a, b) => (b - a))
  return result
}

function matrixSums(arr) {
  let result = []
  let arrTotal = 0
  for(let num = 0; num < arr.length; num++) {
    arrTotal = 0
    for(let index = 0; index < arr[num].length; index++) {
    arrTotal += arr[num][index]
    }
    result.push(arrTotal)
  }
  return result
}

function uniqueElements(arr) {
  let result = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  return result;
}
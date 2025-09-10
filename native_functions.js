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

  }

  for(let counter = start; counter < start + number; counter++) {
    let current_index = start + counter
    arr[current_index] = arr[current_index + 1];
  }
    return result
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));
console.log(count)

function rollCall(arr) {
  for(let ind = 0; ind < arr.length; ind++) {
    console.log(arr[ind])
  }
}

function reverse(arr) {
  let result = []
  for(let ind = arr.length - 1; ind >= 0; ind -= 1) {
  result.push(arr[ind])
  }
  return result
}

function arrayToString(arr) {
  result = ''
  for(let ind = 0; ind < arr.length; ind ++) {
    result += String(arr[ind])
  }
  return result
}

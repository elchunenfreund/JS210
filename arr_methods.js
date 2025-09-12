function concat(...objects) {
  let result = []
  for (let obj of objects)
  if (Array.isArray(obj)) {
    for(let int = 0; int < obj.length; int++) {
    result.push(obj[int])
  }
  } else {
    result.push(obj)
  }
  return result
}

function pop(arr) {
  lastElement = arr[arr.length - 1]
  arr.splice((arr.length - 1), 1)
  return lastElement
}

function push(arr, ...objects) {
  for(let obj of objects) {
    arr[arr.length] = obj
  }
  return arr.length
}

function reverse(obj) {
  let resultStr = ''
  let resultArr = []
  if (Array.isArray(obj)) {
    for(let int = obj.length -1; int >= 0; int -= 1) {
      resultArr.push(obj[int])
    }
    console.log(resultArr)
  } else {
    for(let int = obj.length -1; int >= 0; int -= 1) {
    resultStr += obj[int]
  }
    return resultStr
  }
}

function shift(arr) {
  let firstElement = arr[0]
  for(ind = 1; ind < arr.length; ind++) {
    arr[ind] = arr[ind + 1]
  }
  arr.pop()
  return firstElement
}

function unshift(arr, ...objects) {
  let argCount = objects.length
  for(let obj = 0; obj < argCount; obj++) {
    for(let int = arr.length; int > 0; int -= 1) {
      arr[int] = arr[int - 1]
    }
    arr[0] = objects[obj]
  }
  return arr.length
}

function slice(arr, begin, end) {
  result = []
  if (begin > end) {
    [begin, end] = [end, begin]
  } if (begin > arr.length) {
    begin = arr.length
  } if (end > arr.length) {
    end = arr.length
  }

  for(let int = begin; int < end; int++) {
    result.push(arr[int])
  }
  return result
}

function splice(arr, start, deleteCount, ...obj) {
  let result = []
  if (start > arr.length) {
    start = arr.length
  } if (deleteCount > arr.length - start) {
    deleteCount = arr.length - start
  }
  
  let tailObj = arr.slice(start + deleteCount)

  // delete count
  result = result.concat(arr.slice(start, start + deleteCount))
  arr.length = start

  addArr = obj.concat(tailObj)
  // add new abjects
  let objInd = 0
  for(ind = start; ind < start + addArr.length; ind++) {
    arr[ind] = addArr[objInd]
    objInd += 1
  }
  arr.length = start + addArr.length
  return result
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  array1.sort()
  array2.sort()
  for(let ind = 0; ind < array1.length; ind++) {
    if (array1[ind] !== array2[ind]) {
      return false
    }
  }
  return true
}

'strict mode'

const generateArr = (startNum, endNum) => {
  result = []
  for(let i = startNum; i <= endNum; i++) {
    result.push(i)
  }
  return result
}

const countOccurencies = (str) => {
  let result = {}
  for(let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]] += 1
    } else {
      result[str[i]] = 1
    }
  }
  return result
}

const createStr = (obj) => {
  let result = ''
  let keysArr = Object.keys(obj);
  for(key of keysArr) {
    result += key.repeat(obj[key])
  }

  return result
}

const countWords = (str) => {
  let result = {};
  strArr = str.split(' ')
  strArr.forEach((word) => {
    if (result[word.toLowerCase()]) {
      result[word] += 1
    } else {
      result[word.toLowerCase()] = 1
    }
  })

  return result
}

const countSubstr = (str, sub) => {
  result = 0
  for(let i = 0; i < str.length; i++) {
    if (str.substring(i, i + sub.length) === sub) {
      result += 1
    }
  }
  return result
}

const countEle = (arr, ele) => {

}

const countDuplic = (str) => {
  let result = {}
  let strArr = str.split('').forEach((word) => {
    if(result[word]) {
      result[word] += 1
    } else {
      result[word] = 1
    }
  })

  let numArr = Object.values(result).filter((num) => num === 2);
  return numArr.length
}

let appearTwice = (arr) => {
  let arrObj = {}
  arr.forEach((ele) => {
    if (arrObj[ele]) {
      arrObj[ele] += 1
    } else {
      arrObj[ele] = 1
    }
  })

  result = []

  for(obj in arrObj) {
    if (arrObj[obj] === 2) {
      result.push(obj)
    }
  }

  return result
}







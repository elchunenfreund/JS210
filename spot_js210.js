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
countEle(['name', 'year', 'age', 'name'], 'name'); // => 2
countEle([1,2,3,4,5,1,2,3,4], 2); //=> 2





function objectHasProperty(objects, arg) {
  let keys = Object.keys(objects);
  return keys.indexOf(arg) !== -1;
}

function incrementProperty(object, str) {
  if (object[str]) {
    object[str] += 1
  } else {
    object[str] = 1
  }
  return object[str]
}

function copyProperties(obj1, obj2) {
  count = 0
  for(let obj in obj1) {
    obj2[obj] = obj1[obj]
    count++
  }
  return count
}

function wordCount(str) {
  stringArr = str.split(' ')
  result = {}
  for(let word = 0; word < stringArr.length; word++) {
    if (result[stringArr[word]]) {
      result[stringArr[word]] += 1
    } else {
      result[stringArr[word]] = 1
    }
  }
  return result
}


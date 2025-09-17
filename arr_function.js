function union (arr1, arr2) {
  let result = []
  for(let int = 0; int < arr1.length; int ++) {
    if (!result.includes(arr1[int])) {
      result.push(arr1[int])
    }
  }

  for(let int = 0; int < arr2.length; int ++) {
    if (!result.includes(arr2[int])) {
      result.push(arr2[int])
    }
  }
  return result
}

function halvsies(arr) {
  let half = Math.ceil(arr.length / 2)
  let leftArr = arr.slice(0, half);
  let rightArr = arr.slice(half);

  return [leftArr, rightArr]
}

function findDup(arr) {
  return arr.find((element, index) => {
    return arr.indexOf(element) !== arr.lastIndexOf(element)
  })
}

// LS Solution
function findDup(arr) {
  const seen = {}

  for(let int = 0; inr < arr.length; int++) {
    if (seen[arr[int]]) {
      return arr[int]
    } else {
      seen[arr[int]] = true
    }
  }
}

function interleave(arr1, arr2) {
  let result = [];
  for(let int = 0; int < arr1.length; int++) {
    result.push(arr1[int], arr2[int])
  }
  return result
}

function showMultiplicativeAverage(arr) {
  let result = 1;
  for(let int = 0; int < arr.length; int++) {
    result *= arr[int]
  }

  return (result / arr.length).toFixed(3)
}

function multiplyList(arr1, arr2) {
  result = []
  for(let int = 0; int < arr1.length; int++) {
    result.push(arr1[int] * arr2[int])
  }
  return result
}

function digitList(int) {
  let arr = String(int).split('')
  result = arr.map((obj) => Number(obj))
  return result
}

function countOccurrences(arr) {
  result = {}
  arr.forEach((obj) => {
    if (result[obj]) {
      result[obj] += 1
    } else {
      result[obj] = 1
    }
  })

  for(let key in result) {
    console.log(`${key} => ${result[key]}`)
  }
}

function average(arr) {
  result = 0;
  for(let int of arr) {
    result += int;
  }

  return Math.floor(result / arr.length);
}

function runningTotal(arr) {
  let result = []
  for(let int = 0; int < arr.length; int++) {
    result.push(arr[int] + (result[int - 1] || 0))
  }
  return result
}

// LS solution
function runningTotal(array) {
  const resultArray = [];
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
    resultArray.push(sum);
  }

  return resultArray;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
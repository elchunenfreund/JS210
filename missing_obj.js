function fillObj(arr, int1, int2) {
  for(let int = int1 + 1; int < int2; int++) {
    arr.push(int)
  }
}

function missing(arr) {
  let result = []
  for(let int = 0; int < arr.length - 1; int++) {
    if(arr[int] !== (arr[int + 1] - 1)) {
      fillObj(result, arr[int], arr[int + 1])
    } else {
      continue
    }
  }
  return result
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []

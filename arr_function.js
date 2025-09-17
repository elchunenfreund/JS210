function union (arr1, arr2) {
  let result = arr1.concat(arr2)
  result = result.filter((obj) => result.findFirst((element) => element === obj) === result.findLastIndex((element) => element === obj))
  return result;
}
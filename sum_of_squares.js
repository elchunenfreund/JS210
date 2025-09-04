function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, element) => accumulator + (element * element), 0)
}

let array = [3, 5, 7];
console.log(sumOfSquares(array));

// LS Solution
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

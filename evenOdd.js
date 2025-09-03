function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("we are only looking for numbers");
    return
  } 
  
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(2)
evenOrOdd(3)
evenOrOdd(345)
evenOrOdd('abc')

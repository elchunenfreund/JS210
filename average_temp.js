function temperatures(values) {
  return average(values)
}

function average(values) {
  return sum(values) / values.length;
}

function sum(values) {
  var total = 0
  for(let index = 0; index < values.length; index += 1) {
    total += values[index];
  }
  return total
}

console.log(temperatures([12, 12, 10, 15, 24]))

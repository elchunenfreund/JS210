function grader() {
  let score1 = Number(prompt('Enter score 1:'));
  let score2 = Number(prompt('Enter score 2:'));
  let score3 = Number(prompt('Enter score 3:'));

  let average = (score1 + score2 + score3) / 3
  if (average >= 90) {
    return 'A'
  } else if (average >= 70) {
    return 'B'
  } else if (average >= 50) {
    return 'C'
  } else {
    return 'F'
  }
}

console.log(`Based on the average of your 3 scores your letter grade is "${grader()}".`)
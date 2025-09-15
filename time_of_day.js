const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  const midnight = new Date('1/1/2000 00:00');
  const afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  const hours = padWithZeroes(afterMidnight.getHours(), 2);
  const minutes = padWithZeroes(afterMidnight.getMinutes(), 2)

  console.log(`${hours}:${minutes}`)
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

function afterMidnight(time) {
  const givenTime = new Date(`1/1/2000 ${time}`)
  const hours = givenTime.getHours()
  const minutes = givenTime.getMinutes()
  return minutes + (hours * 60)
}

function beforeMidnight(time) {
  if (time === '00:00') {
    return 0
  }
  return (1440 - afterMidnight(time))
}

afterMidnight('00:00');       // 0
beforeMidnight('00:00');      // 0
afterMidnight('12:34');       // 754
beforeMidnight('12:34');      // 686
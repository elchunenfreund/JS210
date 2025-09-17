function dms(angle) {
  const DEGREE = '\u00B0';

  const degrees = Math.trunc(angle);
  let minutes = Math.trunc((angle % 1) * 60) || '00';
  let seconds = Math.floor((((angle % 1) * 60) % 1) * 60) || '00';
  if (String(minutes).length < 2) {
    minutes = '0' + minutes
  } if (String(seconds).length < 2 ) {
    seconds = '0' + seconds
  }

  return `${degrees}${DEGREE}${minutes}'${seconds}\"`;
}
// All test cases should return true
// All test cases should return true
console.log(dms(30) == "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");
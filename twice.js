function twice(int) {
  if (String(int).length % 2 === 0 && String(int).slice(0, String(int).length / 2) === String(int).slice(String(int).length / 2, String(int).length)) {
    return int
  } else {
    return int * 2
  }
}

// LS Solution
function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  const stringNumber = String(number);
  const center = stringNumber.length / 2;
  const leftNumber = stringNumber.substring(0, center);
  const rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

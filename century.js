function century(year) {
  const century = Math.ceil(year / 100);
  const lastDigit = century % 10;
  const lastTwoDigits = century % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${century}th`;
  }

  switch (lastDigit) {
    case 1:
      return `${century}st`;
    case 2:
      return `${century}nd`;
    case 3:
      return `${century}rd`;
    default:
      return `${century}th`;
  }
}

// LS Solution
function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

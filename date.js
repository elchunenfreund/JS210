let today = new Date()
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let tomorow = new Date()
tomorow.setDate(today.getDate() + 1)
let nextWeek = new Date(today.getTime())
nextWeek.setDate(today.getDate() + 7)

function dateSuffix(num) {
  let singleDigit = num < 10 ? num : num % 10
  if ([11, 12, 13].includes(num)) {
    return `${num}th`
  } else if (singleDigit === 1) {
    return `${num}st`
  } else if (singleDigit === 2) {
    return `${num}nd`
  } else if (singleDigit === 3) {
    return `${num}rd`
  } else {
    return `${num}th`
  }
}

function formattedMonth(date) {
  return `${months[date.getMonth()]}, ${dateSuffix(date.getDate())}`
}

function formattedDay(date) {
  return `${daysOfWeek[date.getDay()]}`
}

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  hours = hours < 10 ? `0${hours}` : String(hours);
  minutes = minutes < 10 ? `0${minutes}` : String(minutes);
  return `${hours}:${minutes}`
}

function formattedDate(date) {
  return `${formattedDay(date)} ${formattedMonth(date)} ${formatTime(date)}`
}

function compareDates(date1, date2) {
  return date1.getTime() === date2.getTime()
}


console.log(formattedDate(today))

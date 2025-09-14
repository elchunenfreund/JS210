let radiansToDegrees = radians => radians / (Math.PI / 180);

let degrees = -180;
Math.abs(degrees);

let sqrt = 16777216;
Math.sqrt(sqrt);

let pow = 16;
Math.pow(16, 6);

let a = 50.72;
let b = 49.2;
let c = 49.86;
Math.floor(a)
Math.ceil(b)
Math.round(c)

function genRandom (min, max) {
  if (max < min) {
    [max, min] = [min, max]
  } else if (max === min) {
    return min
  }

  return Math.floor(Math.random() * (max - min + 1) + min)
}



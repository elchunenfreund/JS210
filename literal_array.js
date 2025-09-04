let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj).map(key => key.toUpperCase())
console.log(keys)
console.log(obj)

// LS solution
let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys); // => [ 'B', 'A', 'C' ]
console.log(obj); // => { b: 2, a: 1, c: 3 }

function penultimate(string) {
  let str = string.split(' ');
  return str[str.length - 2]
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"

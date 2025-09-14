function greetings(name, job) {
  let t = job['title']
  let o = job['occupation']
  let fullName = name.join(' ')
  console.log(`Hello, ${fullName}! Nice to have a ${t} ${o} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.

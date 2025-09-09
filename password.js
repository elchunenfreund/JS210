function password() {
  let tries = 0
  let password = 'password'
  while (tries < 3) {
    let input = prompt('What is the password:')
    if (input == password) {
      console.log('You have successfully logged in.')
      break
    } else {
      tries++
    }
    if (tries >= 3) {
      console.log('You have been denied access.')
    }
  }
}

// LS solution and less elegent
const PASSWORD = 'password';
let failedAttempts = 0;

while (true) {
  let guess = prompt('What is the password:');

  if (guess === PASSWORD) {
    console.log('You have successfully logged in.');
    break;
  }

  failedAttempts += 1;

  if (failedAttempts === 3) {
    console.log('You have been denied access.');
    break;
  }
}

password()
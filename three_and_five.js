function multiplesOfThreeAndFive() {
  for(let counter = 1; counter <= 100; counter += 1) {
    if (counter % 3 == 0 && counter % 5 == 0){
      console.log(`${counter}!`)
    } else if (counter % 3 == 0 || counter % 5 == 0) {
      console.log(`${counter}`)
    }
  }
}

multiplesOfThreeAndFive();

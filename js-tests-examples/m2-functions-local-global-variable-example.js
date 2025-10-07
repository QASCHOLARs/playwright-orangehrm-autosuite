let counter = 20; //global variable

function displayVariables(globalcounter, range = 10) {
  let counter = 0; //local variable

  console.log('Global Counter from the function', globalcounter);
  console.log('Local Counter from the function', counter);

  for (let i = 0; i < range; i++) {
    counter++;
    console.log(counter);
  }
}

displayVariables(counter, 5);

console.log('global counter value: ', counter);

function add(a) {
  return a + 1;
}

function subtract(a) {
  return a - 1;
}

function multiply(a) {
  return a * 2;
}

let result = add(subtract(multiply(5))); // Output: 10
console.log('Final result is :' + result);

function add(firstNumber, SecondNumber) {
  console.log('Adding the numbers');
  let result = firstNumber + SecondNumber;
  return result;
}

function sub(firstNumber, SecondNumber) {
  console.log('Subtracting the numbers');
  let result = firstNumber - SecondNumber;
  return result;
}

function mul(firstNumber, SecondNumber) {
  console.log('Multiplying the numbers');
  let result = firstNumber * SecondNumber;
  return result;
}
module.exports = { add, sub, mul };

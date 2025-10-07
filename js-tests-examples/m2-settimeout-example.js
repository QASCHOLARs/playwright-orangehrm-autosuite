//This code demonstrate the use of the setTimeout and clearTimeout functions in JavaScript.

//option-1:
console.log('This code demonstrates the usage of anonymous function');
console.log('Start of the script to sum of the digits of the given number');

const timeoutId1 = setTimeout(() => {
  let givenNumber = 164;
  let sumOfDigits = 0;
  console.log('Given Number is ' + givenNumber);
  while (givenNumber > 0) {
    sumOfDigits += givenNumber % 10;
    givenNumber = Math.floor(givenNumber / 10);
  }
  console.log('Sum of digits of given number:', sumOfDigits);
}, 2000);

console.log('End of the script to sum of the digits of the given number');

//option-2:

console.log(' =================================================');
console.log('This code demonstrates the usage of named function');
console.log('Start of the script to sum of the digits of the given number');

function sumOfDigits(givenNumber) {
  let sumOfDigits = 0;
  while (givenNumber > 0) {
    sumOfDigits += givenNumber % 10;
    givenNumber = Math.floor(givenNumber / 10);
  }
  console.log('Sum of digits of given number:', sumOfDigits);
}

const timeoutId2 = setTimeout(sumOfDigits, 2000, 164);

console.log('End of the script to sum of the digits of the given number');

//This code demonstrates the use of named and anonymous functions.

//named function i.e checkAdult
function checkAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log("Checking named functions -started");
let isAdult = checkAdult(20);

if (isAdult)
console.log('Adult');
else
console.log('Not Adult');
console.log("Checking named functions -finished");

//anonymous function i.e 
console.log("Checking anonymous functions -started");
let checkAdultAnonymous = function(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let isAdultCheck = checkAdultAnonymous(10);

if (isAdultCheck)
console.log('Adult');
else
console.log('Not Adult');
console.log("Checking anonymous functions -finished");

let employeeAge = [25, 30, 35, 40, 45];

console.log('Orginal Employee ages before 5 years increment: ' + employeeAge);
//function created using the function keyword
function employeeAgeAfterFiveYears() {
  for (let index = 0; index < employeeAge.length; index++) {
    employeeAge[index] += 5; //x+=3 = x= x+3
  }

  return employeeAge;
}

console.log(employeeAgeAfterFiveYears());
//console.log('Employee ages after 5 years increment: ' + employeeAge);

// Using arrow function
let employeeAgeArrow = [25, 30, 35, 40, 45];
console.log('Orginal Employee ages before 5 years increment: ' + employeeAgeArrow);

let employeeAgeAfterFiveYearsArrow = () => {
  for (let index = 0; index < employeeAgeArrow.length; index++) {
    employeeAgeArrow[index] += 5;
  }
  return employeeAgeArrow;
};
console.log(employeeAgeAfterFiveYearsArrow());
console.log('Employee ages after 5 years increment: ' + employeeAgeArrow);

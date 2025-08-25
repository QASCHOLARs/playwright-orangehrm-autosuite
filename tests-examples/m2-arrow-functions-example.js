let employeeAge = [25, 30, 35, 40, 45];
console.log('Employee ages before 5 years increment: ' + employeeAge);

function employeeAgeAfterFiveYears() {
  for (let index = 0; index < employeeAge.length; index++) {
    employeeAge[index] += 5;
  }

  return employeeAge;
}

console.log(employeeAgeAfterFiveYears());
console.log('Employee ages after 5 years increment: ' + employeeAge);

// Using arrow function
let employeeAgeArrow = [25, 30, 35, 40, 45];
console.log('Employee ages before 5 years increment: ' + employeeAgeArrow);

const employeeAgeAfterFiveYearsArrow = () => {
  for (let index = 0; index < employeeAgeArrow.length; index++) {
    employeeAgeArrow[index] += 5;
  }
  return employeeAgeArrow;
};
console.log(employeeAgeAfterFiveYearsArrow());
console.log('Employee ages after 5 years increment: ' + employeeAgeArrow);

//This code demonstrates the use of return statement

function getEmployeeDetails() {
  return { name: 'John', age: 40, designation: 'Software Engineer' };
}

function getEmployeeID() {
  return 1010; //single value
}

console.log('Received single value using the return');
let employeeID = getEmployeeID();
console.log(employeeID);

console.log('Received multiple values using the return');
const employeeDetails = getEmployeeDetails();
console.log(employeeDetails);
console.log(typeof employeeDetails);
console.log(
  employeeDetails['name'],
  employeeDetails.age,
  employeeDetails['designation']
);

const { name, age, designation } = employeeDetails;
console.log(name, age, designation);

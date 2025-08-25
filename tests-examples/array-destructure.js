//This is example demonstrates array destructuring in JavaScript

let empDetails = ['John Doe', 'Software Engineer', 50000];

let [name, position, salary, city='Hyderabad'] = empDetails;

console.log(`Employee Name: ${name}`);
console.log(`Position: ${position}`);
console.log(`Salary: ${salary}`);
console.log(`City: ${city}`);

/*
let id = Symbol('id');
console.log(`ID: ${id.toString()}`);
let [empId = id, ...rest] = empDetails;
console.log(`Employee ID: ${empId.toString()}`);
console.log(`Rest of the details: ${rest.join(', ')}`);
*/
//Demonstrating default values and rest parameters in array destructuring
let [firstName = 'Unknown', lastName = 'Employee'] = ['Jane'];
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);


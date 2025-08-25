//This code demonstrates object destructuring in JavaScript

const empDetails = {
    [
  name: 'John Doe',
  position: 'Software Engineer',
  salary: 50000],
  [
    name: 'John Doe',
  position: 'Software Engineer',
  salary: 50000],
    [
    name: 'John Doe',
  position: 'Software Engineer',
  salary: 50000
}
];

let { name, position, salary, company = 'ABC Corp' } = empDetails[0];
console.log(`Employee Name: ${name}`);
console.log(`Position: ${position}`);
console.log(`Salary: ${salary}`);
console.log(`Company: ${company}`);

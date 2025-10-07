// Purpose:  This code reads a JSON file and logs the contents to the console.
// It also demonstrates serialization and deserialization of the JSON.

const employeeDetails = require('../data/serialization.json'); // Load JSON file

/* When you use require() to load a JSON file,
1. Node.js finds the file data.json.
2. It reads the file content (which is plain string JSON).
3. It automatically runs JSON.parse() internally.
4. It assigns the result (a JavaScript object) to employee.
*/

//Check the type of employeeDetails object
console.log('After loading the json file using require()');
console.log('employeeDetails - Data Type:', typeof employeeDetails);

console.log('================================');
// Accessing the properties of employeeDetails object
console.log('Accessing the properties of the employeeDetails object');
console.log('Employee Name:', employeeDetails.name);
console.log('Employee Age:', employeeDetails.age);
console.log('Employee Salary:', employeeDetails.salary);
console.log('Employee Department:', employeeDetails.department);

// Serializing employeeDetails object to demonstrate JSON.stringify
console.log('================================');
console.log('Performing the serialization of the employeeDetails object');
const serializedemployeeDetails = JSON.stringify(employeeDetails);
console.log(
  'serializedemployeeDetails - Data Type :',
  typeof serializedemployeeDetails
);
console.log('Accessing serialized employeeDetails:', serializedemployeeDetails);
console.log('================================');

//Deserialize the serialized string back to object

console.log(
  'Performing the deserialization of the serializedemployeeDetails object'
);
const deserializedemployeeDetails = JSON.parse(serializedemployeeDetails);
console.log(
  'deserializedemployeeDetails - Data Type :',
  typeof deserializedemployeeDetails
);
console.log('Accessing properties of deserializedemployeeDetails:');
console.log('Employee Name:', deserializedemployeeDetails.name);
console.log('Employee Age:', deserializedemployeeDetails.age);
console.log('Employee Salary:', deserializedemployeeDetails.salary);
console.log('Employee Department:', deserializedemployeeDetails.department);
console.log('================================');

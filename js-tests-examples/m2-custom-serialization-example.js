//This code demostrates custom serialization

//This code demonstrates serialization and deserialization of objects in JavaScript using JSON.
const employee1 = {
  name: 'John',
  age: 30,
  salary: 100000,
  department: undefined,
  employeeDisplay: function () {
    console.log(`${this.name}, ${this.age}, ${this.salary}`);
  },
};

//This code block shows the original object and determines its type.
console.log('Original Object:', employee1);
console.log('Type: ', typeof employee1);

//Serialization converts the object into a JSON string. UNDEFINED properties and functions are not included in the serialized output.
const serializedEmployee = JSON.stringify(employee1);
console.log('Serialized Object:', serializedEmployee);
console.log('Type: ', typeof serializedEmployee);

//deserialization converts the JSON string back into an object.
const deserializedEmployee = JSON.parse(serializedEmployee);
console.log('Deserialized Object:', deserializedEmployee);
console.log('Type: ', typeof deserializedEmployee);
console.log('Employee Name', deserializedEmployee.name);
console.log('Employee Age', deserializedEmployee.age);
console.log('Employee Salary', deserializedEmployee.salary);
console.log('Employee Department', deserializedEmployee.department);

//This code demonstrates custom serialization and deserialization of objects in JavaScript using JSON.

const employee2 = {
  name: 'Jane',
  age: 25,
  salary: 90000,
  department: undefined,
  employeeDisplay: function () {
    console.log(`${this.name}, ${this.age}, ${this.salary}`);
  },
  toJSON: function () {
    return {
      name: this.name,
      age: this.age,
      //salary: this.salary,
      department: this.department,
    };
  },
};

//This code block shows the original object and determines its type.

console.log('Original Object:', employee2);
console.log('Type: ', typeof employee2);

//Serialization converts the cutsom object properties into a JSON string. UNDEFINED properties and functions are not included in the serialized output.

const serializedEmployee2 = JSON.stringify(employee2);
console.log('Serialized Object:', serializedEmployee2);
console.log('Type: ', typeof serializedEmployee2);

//deserialization converts the JSON string back into an object.

const deserializedEmployee2 = JSON.parse(serializedEmployee2);
console.log('Deserialized Object:', deserializedEmployee2);
console.log('Type: ', typeof deserializedEmployee2);
console.log('Employee Name', deserializedEmployee2.name);
console.log('Employee Age', deserializedEmployee2.age);
console.log('Employee Salary', deserializedEmployee2.salary);
console.log('Employee Department', deserializedEmployee2.department);

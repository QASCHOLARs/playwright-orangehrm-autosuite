//This code demonstrates getters and setters in a JavaScript class.

class Person {
  name = '';
  age = 0;
  location = '';

  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    this.name = value;
  }

  get age() {
    return this.age;
  }

  set age(value) {
    this.age = value;
  }
  get location() {
    return this.location;
  }
  set location(value) {
    this.location = value;
  }
}
//create an instance of Person
const person1 = new Person('Chary', 30,'Hyderabad');
console.log(person1.name); // Chary //get name() will be called.
console.log(person1.age); // 30 //get age() will be called.
person1.name = 'Doe'; //set name() will be called.
person1.age = 31; //set age() will be called.
console.log(person1.name); // Doe //get name() will be called.
console.log(person1.age); // 31 //get age() will be called.
console.log(person1.location); // '' //get location() will be called.
person1.location = 'Bangalore'; //set location() will be called.
console.log(person1.location); // Bangalore //get location() will be called.

console.log('================================');

// Another instance to show independent state
const person2 = new Person('Alice', 30, 'New York');
console.log(person2.name); // Alice //get name() will be called.
console.log(person2.age); // 30 //get age() will be called.
console.log(person2.location); // New York //get location() will be called.
person2.name = 'Bob'; //set name() will be called.
person2.age = 32; //set age() will be called.
console.log(person2.name); // Bob //get name() will be called.
console.log(person2.age); // 32 //get age() will be called.
person2.location = 'New York'; //set location() will be called.
console.log(person2.location); // New York //get location() will be called.

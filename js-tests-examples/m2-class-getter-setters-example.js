//This code demonstrates getters and setters in a JavaScript class.

class Person {
  _name = '';
  _age = 0;
  _location = '';

  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    console.log('Setting age to:', value);
    if (value < 0) {
      this._age = 0;
    } else {
      this._age = value;
    }
  }
  get location() {
    return this._location;
  }
  set location(value) {
    console.log('Setting location to:', value);
    this._location = value;
  }
}
//create an instance of Person
const person1 = new Person('Chary', 30, 'Hyderabad');

console.log(person1.name); // Chary //get _name() will be called.
console.log(person1.age); // 30 //get _age() will be called.
console.log(person1.location); // Hyderabad //get _location() will be called.

person1.name = 'Doe'; //set _name() will be called.
person1.age = -310; //set _age() will be called.
person1.location = 'Bangalore'; //set _location() will be called.

console.log(person1.name); // Doe //get _name() will be called.
console.log(person1.age); // 31 //get _age() will be called.
console.log(person1.location); // '' //get _location() will be called.

/*
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
*/

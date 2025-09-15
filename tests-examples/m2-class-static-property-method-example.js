//This code demonstrates static property and method in JavaScript

class Person {
  static species = 'Homo Sapiens';

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static getSpecies() {
    return Person.species;
  }
}

// Accessing static property
console.log(Person.species); // Homo Sapiens

// Calling static method
console.log(Person.getSpecies()); // Homo Sapiens

//This code demonstrates static property and method in JavaScript

class Person {
  static species = 'Homo Sapiens';
  #name = '';
  #age = 0;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  static getSpecies() {
    return Person.species;
  }
}

const user = new Person('John', 30);
//console.log(user.#name);
//console.log(user.#age);

//console.log(user.species);

// Accessing static property
console.log(Person.species); // Homo Sapiens

// Calling static method
console.log(Person.getSpecies()); // Homo Sapiens

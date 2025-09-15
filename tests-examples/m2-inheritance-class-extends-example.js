//This code demonstrates class inheritance in JavaScript
class Parent {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log('Hello, my name is ' + this.name);
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name); // Call the parent class constructor
    this.age = age;
  }
  sayAge() {
    console.log('I am ' + this.age + ' years old');
  }
}

const childInstance = new Child('Alice', 10);
childInstance.sayHello(); // Outputs: Hello, my name is Alice
childInstance.sayAge(); // Outputs: I am 10 years old
console.log(childInstance instanceof Child); // true
console.log(child.prototype instanceof Parent); // true

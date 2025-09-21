//This code demonstrates class inheritance in JavaScript
class Parent {
  name;

  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log('Hello, my name is ' + this.name);
  }
}
class Child extends Parent {
  age;
  constructor(name, age) {
    super(name); // Call the parent class constructor
    this.age = age;
  }
  sayAge() {
    console.log('I am ' + this.age + ' years old');
  }
  sayHello() {
    super.sayHello(); // Call the parent class method
    //console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old');
  }
}

const childInstance = new Child('Alice', 10);

childInstance.sayHello(); // Outputs: Hello, my name is Alice
childInstance.sayAge(); // Outputs: I am 10 years old

//console.log(childInstance instanceof Child); // true

//console.log(childInstance.prototype instanceof Parent); // true
//console.log(Child.prototype);

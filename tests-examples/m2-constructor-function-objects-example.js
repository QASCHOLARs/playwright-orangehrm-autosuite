//This code is to show how to use constructor function  
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Create a new instance of Person 
const person1 = new Person("John", 30);

// Call the sayHello method on the person1 instance
person1.sayHello(); // Output: Hello, my name is John and I am 30 years old.

// Create another instance of Person
const person2 = new Person("Alice", 25);        
// Call the sayHello method on the person2 instance
person2.sayHello(); // Output: Hello, my name is Alice and I am 25


const person3 = new Person("Bob", 30);  
person3.sayHello(); // Output: Hello, my name is Bob and I am 30

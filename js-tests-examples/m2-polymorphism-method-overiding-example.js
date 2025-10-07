class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks 🐶');
  }
}

class Cat extends Animal {
  speak() {
    console.log('Cat meows 🐱');
  }
}

//Example usage
let animals = [new Animal(), new Dog(), new Cat()];

console.log(animals);

animals.forEach((animal) => {
  animal.speak(); // same method name, but behavior differs
  console.log(animal);
});

/*const dog = new Dog();
dog.speak(); // Dog barks 🐶

const cat = new Cat();
cat.speak(); // Cat meows 🐱

const cat = new Cat();
cat.speak(); // Cat meows 🐱*/

//👉 Here, speak() is the same function name, but each class gives its own meaning.

let car = {
  move: function () {
    console.log('Car drives 🚗');
  },
};

let person = {
  move: function () {
    console.log('Person walks 🚶‍♂️');
  },
};

function startMoving(thing) {
  thing.move(); // doesn’t care if it’s a car or person
}

startMoving(car); // Car drives 🚗
startMoving(person); // Person walks 🚶‍♂️

//👉 This is also polymorphism, because the same move() call works differently depending on the object.

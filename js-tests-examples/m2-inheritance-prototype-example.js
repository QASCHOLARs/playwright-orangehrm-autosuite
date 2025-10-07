//This code demonstrates inheritance using object prototypes in JavaScript.

//create a prototype object.
const vehicle = {
  start: function () {
    console.log('Vehicle started');
  },
  stop: function () {
    console.log('Vehicle stopped');
  },
};

//create a new object that inherits from the prototype.
const car = Object.create(vehicle);

car.honk = function () {
  console.log('Car honked');
};
car.start();
car.stop();
car.honk();

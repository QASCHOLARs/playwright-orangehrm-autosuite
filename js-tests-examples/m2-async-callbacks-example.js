//This code demonstrates the use of callback functions in asynchronous operations using the M2 library.

/* Analogy:
Think of it like this:
Imagine you order a pizza 🍕.
You give the restaurant your phone number (callback function).
When the pizza is ready, they call you back. */

function orderPizza(callback) {
  console.log("Pizza ordered...");
  setTimeout(() => {
    console.log("Pizza is ready 🍕");
    callback(); // Call back the customer
  }, 2000); // 2 seconds later
}

function eatPizza() {
  console.log("Now eating the pizza 😋");
}

orderPizza(eatPizza);

//This code demonstrates the use of callback functions in asynchronous operations using the M2 library.

/* Analogy:
Think of it like this:
Imagine you order a pizza 🍕.
You give the restaurant your phone number (callback function).
When the pizza is ready, they call you back. */

function orderPizza(callback) { //callback = eatPizza
  console.log("Pizza ordered...");
  setTimeout(() => {
    console.log("Pizza is ready 🍕");
    callback(sendFeedback); // Call back the customer
  }, 2000); // 2 seconds later
}

function eatPizza(callback) {
  console.log("Now eating the pizza 😋");
  callback(); // Call back to send feedback
}

function sendFeedback() {
  console.log("Sending feedback to the restaurant 📞")
  };

orderPizza(eatPizza);
console.log("Waiting for the pizza... ⏳");


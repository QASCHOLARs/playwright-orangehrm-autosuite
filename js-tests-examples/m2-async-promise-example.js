//This code demonstrates the use of promises to handle asynchronous operations in JavaScript.

function orderPizza() {
  console.log("Starting to order pizza...");
  return new Promise((resolve, reject) => {
    console.log("Pizza ordered...");
    setTimeout(() => {
      const success = false; // change to false to see rejection
      if (success) {
        resolve("Pizza is ready 🍕");
      } else {
        reject("Sorry, oven broke 🔥");
      }
    }, 2000);
  });
}

const promiseObject = orderPizza() //sneha

console.log(promiseObject); // This will log a pending promise

promiseObject.then((message) => {
    console.log(promiseObject);
    console.log(message);
    console.log("Now eating the pizza 😋");
  })
      

promiseObject.catch((error) => {
    console.log(error);
  });

promiseObject.finally(() => {
    console.log("Thank you for ordering. Visit again!");
    });

console.log("Doing other tasks while waiting for pizza... 🍿")
;

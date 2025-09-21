//This code demonstates the use of async/await in JavaScript for handling asynchronous operations.

function orderPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve("Pizza is ready 🍕");
      else reject("Oven broke 🔥");
    }, 2000);
  });
}

async function eatDinner() {
  try {
    console.log("Ordering pizza...");
    const message = await orderPizza(); // wait for it
    console.log(message);
    console.log("Now eating the pizza 😋");
  } catch (error) {
    console.log("Error:", error);
  }
}

eatDinner();
console.log("Performing other tasks while waiting for the dinner to be prepared...");

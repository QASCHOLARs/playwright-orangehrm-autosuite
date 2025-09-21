function greet(name, age) {
  if (arguments.length === 1) {
    console.log(`Hello, ${name}!`);
  } else if (arguments.length === 2) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
}


greet('Chary'); // Hello, Chary!
greet('Chary', 22); // Hello, Chary! You are 44 years old.

//Notes:
//In Java or C++, you can have multiple functions with the same name but different parameter lists.
//But in JavaScript, this is not possible directly — if you define the same function twice, the latest definition overwrites the previous one.
//👉 Same function greet(), but behaves differently depending on arguments count.

//?? - Nullish coalescing (koh-uh-less-ing) operator

let username;
let type;
let age = null;
let visaStatus = "";

console.log(`Username is: ${username}`); // undefined
console.log(`Type is: ${type}`); // undefined
console.log(`Age is: ${age}`); // null
console.log(`Visa Status is: ${visaStatus}`); // empty string
console.log("-------------------");

// Using nullish coalescing operator to provide default values
console.log(`Hello, ${username ?? 'Guest'}!`);
console.log(`User type: ${type ?? 'Regular'}`);
console.log(`User age: ${age ?? 18}`);
console.log(`Visa Status: ${visaStatus || 'Not Specified'}`);
console.log("-------------------");

// Explanation:
//you don’t need an if-else statement to check for null or undefined values.
//The nullish coalescing operator (??) provides a concise way to handle such cases.


function greetUser(name) {
    console.log(`Username is: ${name}`);
    
    // Using nullish coalescing operator to provide a default name
    name = name ?? 'Guest';
    console.log(`Hello, ${name}!`);
}
greetUser(); // Output: Hello, Guest!
greetUser('Chary'); // Output: Hello, Alice!


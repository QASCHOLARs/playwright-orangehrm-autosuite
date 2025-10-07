//This file demonstrates the core concepts of arrays in JavaScript.

let Orgfruits = [
  'kiwi',
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
];

//basic for loop.
for (let index = 0; index < Orgfruits.length; index++) {
  console.log(Orgfruits[index]);
}

// while loop
let counter = 0;
while (counter < Orgfruits.length) {
  console.log(Orgfruits[counter]);
  counter++;
}

console.log('end of while loop');
//for .. of loop
for (let fruit of Orgfruits) {
  console.log(fruit);
}

console.log('end of for .. of  loop');

for (let fruitElement in Orgfruits) {
  console.log(fruitElement);
  console.log(Orgfruits[fruitElement]);
}

console.log('end of for .. in  loop');

Orgfruits.forEach(function (element, index) {
  console.log(`${index}: ${element}`);
});

/*
let Convfruits = Orgfruits.sort();
console.log("Sorted array to string: " + Convfruits);


let cats = ['tiger', 'cat'];
let birds = ['owl', 'eagle'];
let dogs = ['wolf', 'dog'];

let animals = [].concat(cats, birds, dogs);
console.log(animals); // [ 'tiger', 'cat', 'owl', 'eagle', 'wolf', 'dog' ]

let animals2 = [...cats, ...birds, ...dogs];
console.log(animals2); // [ 'tiger', 'cat', 'owl', 'eagle', 'wolf', 'dog' ]

console.log(animals2.includes('cats'));


let multiArray= [[5,6,7]];

console.log(multiArray[0][1]);

*/
/*
// Adding elements
fruits.push('elderberry');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
// Removing elements

*/

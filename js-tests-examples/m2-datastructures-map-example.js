//This code demonstrates the usage of the maps
//usage of object to demonstrate maps later in this section.

//key data type is always string
//it maintains the insertion order for non integer keys
//integer keys are sorted in ascending order

const obj1 = {
  name: 'John',
  age: 30,
  city: 'New York',
  3: 'three',
  4: 'four',
  1: 'one',
  2: 'two',

  printDetails: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
  },
};

console.log('Object Details:');
console.log(obj1);

//iterate through the object

for (let key in obj1) {
  //console.log(typeof (obj1[key]));
  console.log('----------');
  console.log('Key:', key);
  console.log('Key Type:', typeof key);
  console.log('Value:', obj1[key]);
  console.log('Value Type:', typeof obj1[key]);
  console.log('----------');
}

/*

//create a map for the above object
const map1 = new Map();
map1.set('name', 'John');
map1.set('age', 30);    
map1.set('city', 'New York');
map1.set(3, 'three');
map1.set(4, 'four');
map1.set(1, 'one');
map1.set(2, 'two');
map1.set('printDetails', function() {
    console.log(`Name: ${this.get('name')}, Age: ${this.get('age')}, City: ${this.get('city')}`);
}

);
//iterate through the map
for (let [key, value] of map1) {
    console.log("----------");
    console.log("Key:", key);
    console.log("Key Type:", typeof key)
    console.log("Value:", value);
    console.log("Value Type:", typeof value);
    console.log("----------");
}

*/

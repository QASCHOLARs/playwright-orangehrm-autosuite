let obj = { name: "John" };

// usage of weakmap to demonstrate garbage collection
let map = new WeakMap();
map.set("name", obj);

// remove reference
obj = null;

console.log(map.size); // 1 → still alive because of map


// Safe to call after removing last reference
if (global.gc) {
  global.gc(); 
  console.log("Garbage collection attempted.");
} else {
  console.log("Run Node with --expose-gc to enable manual GC");
}


// Check the size of the map again
console.log(map.size);




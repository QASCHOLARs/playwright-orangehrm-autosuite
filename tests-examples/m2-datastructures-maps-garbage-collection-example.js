let obj = { name: "John" };

// usage of map to demonstrate garbage collection
let map = new Map();
map.set("name", obj);

// remove reference
obj = null;

console.log(map.size); // 1 → still alive because of map

// Now, if we remove the entry from the Map, the object can be garbage collected
map.delete("name");
console.log(map.size); // 0

// Safe to call after removing last reference
if (global.gc) {
  global.gc(); 
  console.log("Garbage collection attempted.");
} else {
  console.log("Run Node with --expose-gc to enable manual GC");
}


// Check the size of the map again
console.log(map.size);




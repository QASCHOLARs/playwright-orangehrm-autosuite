// ESM
//import memoizee from "memoizee";

// or CommonJS
const memoizee = require('memoizee');
const { slowSquare } = require('./m2-module-memoization-example');

// 1) Wrap it with memoizee
const memoSquare = memoizee(slowSquare);

// Cache entries live 3 seconds; keep at most 3 different (a,b) pairs
//const memoAdd = memoizee(slowSquare, { maxAge: 3000, max: 3 });

// 2) First call: does the work
console.time('first');
console.log(slowSquare(42)); // logs "Calculating..." then 1764
console.timeEnd('first');

/*
console.time("second");
console.log(slowSquare(42)); // reads from the cache.
console.timeEnd("second");
*/

// 3) Second call with the same arg: served from cache
console.time('second');
console.log(memoSquare(42)); // no "Calculating...", instant 1764
console.timeEnd('second');

/*
setTimeout(() => {
  console.log(slowSquare(42)); // After ~3s: expired → Calculating... -> 3
}, 3200);

*/

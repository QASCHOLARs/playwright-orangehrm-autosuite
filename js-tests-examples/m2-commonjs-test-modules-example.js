const { add, sub, mul } = require('./m2-commonjs-modules.mjs');

//import { add, sub, mul } from './m2-commonjs-modules.mjs';

let first = 100;
let second = 200;

let result1 = add(first, second);
console.log(result1);

let result2 = sub(first, second);
console.log(result2);

let result3 = mul(first, second);
console.log(result3);

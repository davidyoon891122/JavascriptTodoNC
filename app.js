// recap
// types
// string, number, boolean, null, NaN, undefined
const a = NaN
const b = null
let c;
console.log(a, b, c);

console.log(42/0);
console.log(42/-0);

// BigInt
const x = 2n ** 53n 
const y = x + 1n
console.log(x, y);

// Array
const days = [1,2,"수", false, null, undefined];
const toBuy = ["potato", "tomato", "pizza"]
console.log(toBuy[2]);
// update 
toBuy[2] = "water"

console.log(toBuy[2]);
// add
toBuy.push("coke");
console.log(toBuy);
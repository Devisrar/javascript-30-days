/*
here we are swapping the values of a and b variables 
in JavaScript without using a third variable by utilizing array destructuring.
*/
let a = 10;
let b = 20;

// Swap values using destructuring
[a, b] = [b, a];

console.log('Value of a is', a); // Output: 20
console.log('Value of b is', b); // Output: 10

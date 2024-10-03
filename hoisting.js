/**
 * In JavaScript, when we try to access a variable before initializing it, 
 * it results in a "ReferenceError" for variables declared with `let` or `const`. 
 * For `var`, however, JavaScript hoists the variable declaration, but initializes it with `undefined`.
 * This behavior is known as "hoisting" in JavaScript.
 * Example with `var`:
 */
console.log('values is ..', x); // undefined (because of hoisting)
console.log('type of ${x} is', typeof (x)); // typeof will return 'undefined'
var x = 7;

/**
 * Example when trying to access a variable that is not declared at all:
 * This will throw a "ReferenceError" because the variable `y` is not defined.
 */
console.log(y); // ReferenceError: y is not defined

/**
 * JavaScript handles `var` and `let` differently in terms of hoisting:
 * - `var` is hoisted and initialized with `undefined`.
 * - `let` and `const` are hoisted but not initialized, so they remain in the Temporal Dead Zone (TDZ).
 * 
 * For `var`, the value is initially `undefined` before initialization:
 * Output for `var` case:
 * - values is .. undefined
 * - type of ${x} is undefined
 * 
 * For `let`, the variable is in the TDZ until it is initialized, and accessing it before initialization 
 * will throw a "ReferenceError".
 */

/**
 * Example with `let` where the variable is in the Temporal Dead Zone (TDZ):
 * Accessing `z` before it is initialized will throw a "ReferenceError".
 */
console.log('values is ..', z); // ReferenceError: Cannot access 'z' before initialization
console.log('type of ${z} is', typeof (z)); // This will not run due to the ReferenceError
let z = 7;

/**
 * This will throw a "ReferenceError" because `d` is not declared.
 */
console.log('value of d is', d); // ReferenceError: d is not defined

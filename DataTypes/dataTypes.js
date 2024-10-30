/*
In JavaScript, we have different data types. Below is a demonstration:

1. Number
2. BigInt
3. String
4. Boolean
5. Null
6. Undefined
7. Symbol
*/

/*
Interview Questions:

Q1: What is 'null' in JavaScript?
Answer: 
- 'Null' is a special value that represents the intentional absence of any object value. 
- It is considered a primitive value, but when we check its type using `typeof`, it incorrectly returns 'object' due to a legacy bug in JavaScript.

Q2: What is 'undefined' in JavaScript?
Answer:
- 'Undefined' is a primitive data type in JavaScript. 
- It means a variable has been declared but not yet assigned a value.
- When we log the `typeof undefined`, it returns 'undefined', confirming it as a data type in JavaScript.
*/

// Logging the types of 'null' and 'undefined'
console.log(typeof null);        // Outputs: 'object' (legacy behavior)
console.log(typeof undefined);   // Outputs: 'undefined'

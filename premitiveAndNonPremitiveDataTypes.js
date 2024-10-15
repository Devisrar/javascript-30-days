/**
 * Primitive Data Types: Call by Value
 * 
 * Primitive types store the actual value in the variable.
 * When one variable is assigned to another, the value is copied, not the reference.
 * 
 * Examples: string, number, boolean, BigInt, undefined, null, symbol
 */

// Example of String (Primitive)
let string1 = "Hello, World!";
let string2 = string1; // Copying the value of string1 into string2

console.log(string1); // Output: "Hello, World!"
console.log(string2); // Output: "Hello, World!"

string1 = "Changed"; // Changing string1 doesn't affect string2
console.log(string1); // Output: "Changed"
console.log(string2); // Output: "Hello, World!"

// Example of Number (Primitive)
let number1 = 42;
let number2 = number1; // Copying the value of number1 into number2

console.log(number1); // Output: 42
console.log(number2); // Output: 42

number1 = 100; // Changing number1 doesn't affect number2
console.log(number1); // Output: 100
console.log(number2); // Output: 42

// Example of Boolean (Primitive)
let isTrue = true;
let anotherBool = isTrue; // Copying the value of isTrue into anotherBool

console.log(isTrue); // Output: true
console.log(anotherBool); // Output: true

isTrue = false; // Changing isTrue doesn't affect anotherBool
console.log(isTrue); // Output: false
console.log(anotherBool); // Output: true

// Example of BigInt (Primitive)
let bigInt1 = 9007199254740991n;
let bigInt2 = bigInt1; // Copying the value of bigInt1 into bigInt2

console.log(bigInt1); // Output: 9007199254740991n
console.log(bigInt2); // Output: 9007199254740991n

bigInt1 = 123456789n; // Changing bigInt1 doesn't affect bigInt2
console.log(bigInt1); // Output: 123456789n
console.log(bigInt2); // Output: 9007199254740991n

// Example of undefined (Primitive)
let uninitialized; // The variable is uninitialized, its default value is undefined
console.log(uninitialized); // Output: undefined

// Example of null (Primitive)
let emptyValue = null; // The variable is explicitly set to null (no value)
console.log(emptyValue); // Output: null

// Example of Symbol (Primitive)
let sym1 = Symbol("unique");
let sym2 = Symbol("unique"); // Each symbol is unique even with the same description

console.log(sym1 === sym2); // Output: false


/**
 * Non-Primitive (Reference) Data Types: Call by Reference
 * 
 * Non-primitive types store a reference to the memory location of the actual data.
 * When a variable is assigned to another, both variables reference the same data.
 * 
 * Examples: arrays, objects, functions
 */

// Example of Array (Non-Primitive)
let array1 = [1, 2, 3];
let array2 = array1; // Both array1 and array2 reference the same array in memory

console.log(array1); // Output: [1, 2, 3]
console.log(array2); // Output: [1, 2, 3]

array1.push(4); // Modifying array1 also affects array2
console.log(array1); // Output: [1, 2, 3, 4]
console.log(array2); // Output: [1, 2, 3, 4]

// Example of Object (Non-Primitive)
let person = { name: "John", age: 30 };
let anotherPerson = person; // Both person and anotherPerson reference the same object

console.log(person); // Output: { name: "John", age: 30 }
console.log(anotherPerson); // Output: { name: "John", age: 30 }

person.age = 31; // Modifying person also affects anotherPerson
console.log(person); // Output: { name: "John", age: 31 }
console.log(anotherPerson); // Output: { name: "John", age: 31 }

// Example of Function (Non-Primitive)
function greet() {
    return "Hello!";
}
let greetCopy = greet; // Both greet and greetCopy reference the same function

console.log(greet()); // Output: "Hello!"
console.log(greetCopy()); // Output: "Hello!"

// Changing the original function
greet = function() {
    return "Goodbye!";
};

console.log(greet()); // Output: "Goodbye!"
console.log(greetCopy()); // Output: "Hello!" (remains unchanged)

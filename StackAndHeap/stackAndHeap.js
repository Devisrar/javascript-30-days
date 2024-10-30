/**
 * Stack: 
 * 
 * The stack is used to store primitive data types. 
 * In the stack, variables hold actual values. 
 * When a primitive value is assigned to a variable, it is copied, 
 * meaning changes to one variable do not affect the other.
 * 
 * Example: Changing a string variable does not affect its original value.
 */

// Example of Stack (Primitive Data Types)
let firstName = 'Muhammad';
let last = 'Israr';
let final = firstName + last;

console.log('Before copied:', final); // Output: "MuhammadIsrar"

// Changing the value of final doesn't affect the original values of firstName or last
final = "Muhammad Sarim"; 
console.log('After copied:', final); // Output: "Muhammad Sarim"


/**
 * Heap:
 * 
 * The heap is used to store non-primitive data types such as objects and arrays. 
 * Variables store a reference to the memory location, not the actual value.
 * When the value of a non-primitive data type is changed, 
 * it changes the original value as they both point to the same memory reference.
 * 
 * Example: Changing an object property affects the original object.
 */

// Example of Heap (Non-Primitive Data Types)
let personalData = {
    name: 'Israr',
    email: 'israr.exs@gmail.com',
    age: 25,
    occupation: 'Software Engineer'
};

console.table(personalData); // Displaying the object in table format

// Modifying the 'age' property of personalData also affects the original object
personalData.age = 24; 
console.log(personalData); // Output: Updated object with age: 24

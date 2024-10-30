/**
 * Summary:
 * This file provides a comprehensive guide to working with objects in JavaScript, covering:
 * 
 * 1. **Object Declaration**: Creating objects using literals and constructors.
 * 2. **Symbol Usage**: Adding unique, non-enumerable properties using `Symbol`.
 * 3. **Property Access**: Accessing properties through dot notation and bracket notation.
 * 4. **Property Modification**: Updating and deleting properties, including freezing objects.
 * 5. **Methods Inside Objects**: Using methods and the `this` keyword.
 * 6. **Nested Objects**: Structuring objects with nested key-value pairs.
 * 7. **Combining/Merging Objects**: Using `Object.assign()` and spread operators.
 * 8. **Object Utilities**:
 *    - `Object.keys()` to get keys.
 *    - `Object.values()` to get values.
 *    - `Object.hasOwn()` to check property existence.
 * 9. **Advanced Examples**:
 *    - Adding/removing properties dynamically.
 *    - Iterating over objects with `for...in`.
 *    - Deep cloning for independent copies.
 *    - Optional chaining and nullish coalescing operators (ES2020).
 * 10. **Objects in JavaScript**: Understanding objects as non-primitive data types, stack and heap memory allocation.
 *
 * This guide provides examples for each concept, demonstrating key operations and best practices for handling JavaScript objects.
 */

/**
 * Objects in JavaScript:
 * An **object** is a collection of key-value pairs that can include properties (data) and methods (functions).
 * Objects are categorized as **non-primitive** data types because they can contain multiple values and are mutable.
 * Unlike primitives, which store a single value, objects can store complex collections of data.
 *
 * **Memory Storage**:
 * Objects in JavaScript are stored in **heap memory**, with references to these objects kept in **stack memory**.
 * When you create an object, JavaScript stores the object data in the heap, while only a reference to that
 * data is stored in the stack. This memory structure allows objects to be referenced and modified without
 * duplicating data, making objects more flexible and dynamic in use.
 */

const mysymbol = Symbol('israr'); // Symbol declaration to use as a unique key in the object

// Object declaration using literals
let myInfo = {
    firstName: 'Muhammad',
    lastName: 'Israr',
    [mysymbol]: 'xyz',  // Adding a symbol as a key to the object, which is unique and not directly accessible without the symbol reference
    age: 25,
    greetings() { // Defining a method inside the object to demonstrate the use of 'this' keyword for accessing object properties
        return `Hello ${this.firstName} ${this.lastName}`; // 'this' refers to the current object 'myInfo'
    },
    email: 'israr.exs@gmail.com'
};

// Accessing object properties - Two common ways
console.log(myInfo.firstName, myInfo.lastName); // Dot notation
console.log(myInfo["firstName"], myInfo["lastName"]); // Bracket notation

// Updating object properties
myInfo.email = "misrar@stellatechnology.com"; // Changing the 'email' property value
console.log(myInfo);

// Freezing an object
Object.freeze(myInfo); // Freezes 'myInfo', making it read-only
myInfo.age = 26; // This change will not take effect because the object is frozen
console.log(myInfo); // Outputs the original 'age' value of 25

// Accessing an object method
console.log(myInfo.greetings()); // Calling the greetings method in 'myInfo'

// Creating objects using the Object constructor
const objThroughConstructor = new Object();
objThroughConstructor.fullName = 'Muhammad Israr';
objThroughConstructor.address = 'I-10/3, Islamabad';
console.log(objThroughConstructor);

// Nested objects
const nestedObjects = {
    name: "Israr",
    address: {
        street: 9,
        region: 'Punjab',
        sector: 'Islamabad I-10/3'
    },
    maritalStatus: {
        married: true,
        sons: 4,
        daughters: 2
    }
};
console.log(nestedObjects.maritalStatus);

// Combining objects
// Using Object.assign()
const allObjects = Object.assign({}, myInfo, nestedObjects);
console.log('Combined object using Object.assign():', allObjects);

// Using the spread operator (...)
const combineWithSpreadOp = { ...myInfo, ...nestedObjects };
console.log('Combined object using spread operator:', combineWithSpreadOp);

// Object.keys() - Retrieving all keys in an object
const keysInNestedObjects = Object.keys(nestedObjects);
console.log("Keys in nestedObjects:", keysInNestedObjects);

// Object.values() - Retrieving all values in an object
const valuesInNestedObjects = Object.values(nestedObjects);
console.log("Values in nestedObjects:", valuesInNestedObjects);

// Checking if a key exists within an object
const keyExists = Object.hasOwn(nestedObjects, 'name');
console.log("Does the key 'name' exist in nestedObjects?:", keyExists);

// Additional Learning Examples

// Adding and Removing Properties
let dynamicObject = { name: "John" };
dynamicObject.age = 30; // Adding a new property
delete dynamicObject.age; // Removing a property
console.log("Dynamic object after adding and deleting properties:", dynamicObject);

// Iterating over object properties using for...in
for (let key in myInfo) {
    console.log(`Key: ${key}, Value: ${myInfo[key]}`);
}

// Using Symbols for unique keys
const uniqueSymbol = Symbol('unique');
const anotherObject = { [uniqueSymbol]: "value" };
console.log("Accessing symbol-keyed property:", anotherObject[uniqueSymbol]);

// Deep Cloning Objects (to prevent reference issues)
const deepClonedObject = JSON.parse(JSON.stringify(nestedObjects));
console.log("Deep cloned object:", deepClonedObject);

// Demonstrating Optional Chaining (ES2020)
console.log("Optional chaining example:", nestedObjects.maritalStatus?.sons); // Safe access even if property doesn't exist

// Nullish Coalescing Operator (ES2020)
const unknownValue = null;
console.log("Nullish coalescing operator example:", unknownValue ?? "Default value"); // Outputs "Default value" if unknownValue is null or undefined

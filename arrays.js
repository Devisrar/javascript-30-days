/*
slice():
The slice() method in JavaScript extracts a section of an array 
and returns a new array containing the selected elements, 
without modifying the original array.
*/

let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
let newCars = cars.slice(1, 4); // Extract elements from index 1 up to (but not including) index 4
console.log("cars :", cars); // Original array remains unchanged
console.log("new_cars :", newCars); // New array with selected elements

/*
splice():
The splice() method in JavaScript is used to change the contents of an array by 
removing or replacing existing elements and/or adding new elements in place, 
modifying the original array.
*/
cars.splice(2, 0, 'ambassador', 'BMW', 'Audi'); // Insert elements at index 2 without removing any existing elements
console.log("cars :", cars); // Modified original array

/*
push():
The push() method adds one or more elements to the end of an array, modifying the original array.
*/
const favGames = ['cricket', 'volleyball', 'tennis'];
const favPlayers = ['Babar', 'Kohli', 'Rohit'];
favGames.push(...favPlayers); // Add all elements of favPlayers to favGames
console.log("result with pushing array is", favGames.length); // Returns the new length of the array

/*
concat():
The concat() method returns a new array that combines two or more arrays or values.
*/
const concatArray = favGames.concat(favPlayers); // Concatenates two arrays without modifying the originals
console.log("result with concatenation is", concatArray);

/*
Spread Operator:
Using the spread operator to combine arrays.
*/
const finalArray = [...favGames, ...favPlayers];
console.log(`${favGames} and ${favPlayers} combined using spread operators and the result is`, finalArray);

/*
Array.from():
The Array.from() method creates a new array from an array-like or iterable object.
*/
const name = 'israr';
const convStringToArray = Array.from(name); // Converts string to array
console.log("converting string to array", convStringToArray);

/*
Array.of():
The Array.of() method creates a new array with a variable number of arguments.
*/
const score1 = 100;
const score2 = 200;
const score3 = 300;
const finalScore = Array.of(score1, score2, score3); // Creates an array from individual values
console.log("using Array.of()", finalScore);

/*
SUMMARY:

1. Arrays are enclosed in brackets [ ].
2. The array data type is an object in JavaScript.
3. Arrays can contain different data types, e.g., strings, numbers, booleans, other arrays, etc.
4. Arrays use zero-based indexing, meaning they start at index 0.
5. Arrays are reference types, so modifications affect the original array.

ARRAY METHODS:

1. push() – adds values to the end of an array.
2. pop() – removes the last value of an array.
3. unshift() – adds values to the beginning of an array.
4. shift() – removes the first value of an array.
5. includes() – checks if an array contains a specified element, returning true or false.
6. indexOf() – returns the index of the first occurrence of a specified value.
7. join() – converts an array to a string.
8. slice(start, end) – returns a new array containing selected elements from start up to, but not including, end.
   - Use slice() to extract a portion of an array without modifying the original array.
9. splice(start, deleteCount, items...) – modifies the array by removing, replacing, or adding elements.
   - Use splice() when you need to add, remove, or replace elements within an array.
*/

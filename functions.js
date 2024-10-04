/**
 * Write a function greet(name) that takes a name as a parameter and returns a greeting message.
 * @param {string} name - The name of the person to greet.
 */
function greet(name){
    console.log("Greetings", name);
}
greet("Muhammad Israr");

/**
 * Write a function sumArray(arr) that takes an array of numbers and returns their sum.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} Sum of the numbers in the array.
 */
let arrayList = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arrayList.length; i++) {
    sum = sum + arrayList[i];
}
console.log("Sum is", sum);

/**
 * Working with Arrays:
 * - Create an array of 5 fruits.
 * - Add a new fruit to the end of the array.
 * - Remove the first fruit.
 * - Sort the array alphabetically.
 * - Log the final array.
 */
let fruits = ["Banana", "Orange", "Apple", "Mango", 'grapes'];
fruits.push("Kiwi");      // Add a new fruit to the end of the array
fruits.shift();           // Remove the first fruit
fruits.sort();            // Sort the array alphabetically
console.log("Sorted array list is", fruits);

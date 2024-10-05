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

/**
 * Write a function getData(score) that pushes a grade description into an array based on the score.
 * @param {number} score - The score to evaluate.
 */
let emptyArray = [];
function getData(score) {
    if (score >= 90) {
        emptyArray.push("A grade");
    } else if (score >= 60 && score < 90) {
        emptyArray.push("First division and passed");
    } else {
        emptyArray.push("Failed");
    }
}
getData(90);
console.log(emptyArray);

/**
 * Write a function takePassword(keyval) that checks if the input matches the admin password.
 * @param {string} keyval - The password to check.
 */
let accessPolicy = [];
function takePassword(keyval) {
    if (keyval === "admin@123") {
        accessPolicy.push("Access Granted");
    } else {
        accessPolicy.push("Access Denied");
    }
}
takePassword("admin@123");
console.log("Your status:", accessPolicy);

/**
 * Takes a single letter as input.
 * Prints "Vowel" if the letter is a vowel (a, e, i, o, u), otherwise prints "Consonant".
 * @param {string} char - The character to check.
 */
let vowelOrConsonant = [];
function letter(char) {
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
        vowelOrConsonant.push("Vowel");
    } else {
        vowelOrConsonant.push("Consonant");
    }
}
letter('a');
console.log(vowelOrConsonant);

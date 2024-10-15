/**
 * Create a variable to store your first name.
 * Create another variable to store your last name.
 * Concatenate both variables into a full name and log it along with your age.
 */
const firstName = "Muhammad";
const lastName = "Israr";
const fullName = firstName + " " + lastName;
let age = 25;

console.log('My name is', fullName, "and my age is", age);

/**
 * Data Types Example:
 * 
 * Create variables for each data type: number, string, boolean, and float.
 * Log the type of each variable using `typeof`.
 */
let address = "Islamabad";  // string
let agee = 25;              // number
let boolean = true;         // boolean
let pointVal = 2.5;         // number (float)

console.log(typeof(address), typeof(agee), typeof(boolean), typeof(pointVal));

/**
 * String Manipulation Example:
 * 
 * Create two strings: one for first name and another for last name.
 * Concatenate them into a full name.
 * Convert the full name to uppercase and lowercase.
 */
console.log("Full name in uppercase:", fullName.toUpperCase());
console.log("Full name in lowercase:", fullName.toLowerCase());

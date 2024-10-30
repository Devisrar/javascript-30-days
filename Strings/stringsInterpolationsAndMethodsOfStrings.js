/**
 * Example of Creating a String Object (Not Recommended)
 * 
 * It's generally not a good practice to use the String constructor (`new String()`), 
 * as it creates an object instead of a primitive string.
 */
let fullName = new String('Muhammad Israr');
const email = 'israr.exs@gmail.com';

console.log('Bad way of logging:', fullName + " and email is " + email); // Not optimal logging

/**
 * String Interpolation (Template Literals)
 * 
 * A good way to log variables in JavaScript is by using template literals (string interpolation).
 * This allows embedding variables and expressions into strings and offers more flexibility.
 */
console.log(`My full name is: ${fullName.toLocaleUpperCase()} and my email is ${email}`);

/**
 * Common String Methods in JavaScript
 * 
 * These methods are widely used in both frontend and backend development to manipulate string data.
 */

// 1. toUpperCase() - Converts the string to uppercase
const loggingUppercase = fullName.toUpperCase();
console.log('Name in upperCase is:', loggingUppercase); // Output: "MUHAMMAD ISRAR"

/**
 * 2. indexOf() - Returns the index of the first occurrence of a specified substring.
 * It takes an optional second argument as the start position of the search.
 * If the substring is not found, it returns -1.
 */
const paragraph = 'Hey, my dog\'s name is Rutter';
console.log('Index of "dog":', paragraph.indexOf('dog')); // Output: 9

/**
 * 3. substring() - Extracts a portion of the string between two indices (start and end).
 * The substring includes the start index but excludes the end index.
 */
console.log('Substring from 0 to 10:', paragraph.substring(0, 10)); // Output: "Hey, my do"

/**
 * 4. slice() - Similar to `substring()`, but allows negative indices to count from the end of the string.
 * Extracts a section of the string and returns it as a new string.
 */
console.log('Slice from index 4 to 13:', paragraph.slice(4, 13)); // Output: "my dog na"

/**
 * 5. trim() - Removes whitespace from both ends of a string. 
 * Useful for cleaning up user input.
 */
let messyString = '    Hello World!    ';
console.log('Trimmed string:', messyString.trim()); // Output: "Hello World!"

/**
 * 6. replace() - Replaces the first occurrence of a specified value with another value.
 * To replace all occurrences, use a regular expression with the global flag (/g).
 */
let sentence = 'The sky is blue';
console.log('Replace "blue" with "red":', sentence.replace('blue', 'red')); // Output: "The sky is red"

/**
 * 7. includes() - Checks if a string contains the specified value, returns true or false.
 * This method is case-sensitive.
 */
console.log('Does the sentence include "sky"?', sentence.includes('sky')); // Output: true

/**
 * 8. split() - Splits a string into an array of substrings based on a specified delimiter.
 */
let words = sentence.split(' '); // Splits the sentence into words based on spaces
console.log('Array of words:', words); // Output: ["The", "sky", "is", "blue"]

/**
 * Additional String Method Examples:
 */

// Example 1: toLowerCase() - Converts the string to lowercase
let upperCaseString = 'HELLO WORLD';
console.log('Lowercase string:', upperCaseString.toLowerCase()); // Output: "hello world"

// Example 2: repeat() - Repeats the string a specified number of times
let laugh = 'Ha';
console.log('Repeated 3 times:', laugh.repeat(3)); // Output: "HaHaHa"

// Example 3: charAt() - Returns the character at the specified index in a string
let name = 'JavaScript';
console.log('Character at index 4:', name.charAt(4)); // Output: "S"

// Example 4: startsWith() - Checks if the string starts with the specified value
let greeting = 'Hello, World!';
console.log('Does the greeting start with "Hello"?', greeting.startsWith('Hello')); // Output: true

// Example 5: endsWith() - Checks if the string ends with the specified value
console.log('Does the greeting end with "World!"?', greeting.endsWith('World!')); // Output: true

// Example 6: concat() - Concatenates two or more strings
let firstName = 'Muhammad';
let lastName = 'Israr';
console.log('Full name using concat:', firstName.concat(' ', lastName)); // Output: "Muhammad Israr"

/**
 * Key String Methods Recap:
toUpperCase(): Converts a string to uppercase.
indexOf(): Finds the index of a specified substring.
substring(): Extracts a part of a string between two indices.
slice(): Similar to substring() but supports negative indices.
trim(): Removes whitespace from both sides of a string.
replace(): Replaces part of a string with another string.
includes(): Checks if a string contains a specific value.
split(): Splits a string into an array of substrings based on a delimiter.
toLowerCase(): Converts a string to lowercase.
repeat(): Repeats the string a specified number of times.
charAt(): Returns the character at a specified index.
startsWith(): Checks if a string starts with a specific substring.
endsWith(): Checks if a string ends with a specific substring.
concat(): Concatenates two or more strings.
These methods are versatile and widely used in various scenarios when working with strings in JavaScript.

 * Conclusion:
 * 
 * These string methods are highly useful for manipulating and working with string data in both 
 * frontend (e.g., user input validation, display formatting) and backend (e.g., handling database queries, data formatting).
 * Familiarity with these methods will help in building more efficient and readable JavaScript code.
 */

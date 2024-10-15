/**
 * Example of type conversion in JavaScript.
 * Here, a string is converted to a number using the `Number()` function.
 */

let numberConverstion = "israr";
console.log("Before conversion to Number:", typeof numberConverstion); // Output: string

/**
 * `Number(numberConverstion)` attempts to convert the string to a number.
 * Since the string contains non-numeric characters, it will result in `NaN` (Not a Number).
 */
let checkNumber = Number(numberConverstion);
console.log(checkNumber); // Output: NaN
console.log("After conversion to Number:", typeof checkNumber); // Output: number

/**
 * Function to check the type of the argument passed (`args`).
 * The function checks if the argument is a number, string, or boolean.
 * If the argument is none of these, it returns "not a string or number".
 * 
 * @param {any} args - The value whose type is to be checked.
 */
function checkNumberOrString(args) {
    try {
        if (typeof(args) === "number") {
            console.log("This is a number");
        } else if (typeof(args) === "string") {
            console.log("This is a string");
        } else if (typeof(args) === "boolean") {
            console.log("This is a boolean");
        } else {
            console.log("Not a string, number, or boolean");
        }
    } catch (err) {
        console.log(err);
    }
}

let check = checkNumberOrString(true); // Output: This is a boolean
console.log(check);

/** 
 * Type Conversion Examples:
 * JavaScript allows converting between different types, such as strings, numbers, and booleans.
 * Below are some examples of type conversions.
 */

// Example 1: String to Number
let stringToNumber = "123";
let convertedNumber = Number(stringToNumber); // Converts string "123" to number 123
console.log(`String to Number: ${convertedNumber}, Type: ${typeof convertedNumber}`); // Output: 123, number

// Example 2: Invalid String to Number
let invalidStringToNumber = "abc";
let invalidNumber = Number(invalidStringToNumber); // Attempts to convert "abc" to a number, results in NaN
console.log(`Invalid String to Number: ${invalidNumber}, Type: ${typeof invalidNumber}`); // Output: NaN, number

// Example 3: Number to String
let numberToString = 456;
let convertedString = String(numberToString); // Converts number 456 to string "456"
console.log(`Number to String: ${convertedString}, Type: ${typeof convertedString}`); // Output: "456", string

// Example 4: Boolean to String
let booleanToString = true;
let boolStr = String(booleanToString); // Converts boolean true to string "true"
console.log(`Boolean to String: ${boolStr}, Type: ${typeof boolStr}`); // Output: "true", string

// Example 5: String to Boolean
let stringToBoolean = "false"; // Any non-empty string is truthy when used in Boolean context
let convertedBoolean = Boolean(stringToBoolean); // Converts to true because the string is non-empty
console.log(`String to Boolean: ${convertedBoolean}, Type: ${typeof convertedBoolean}`); // Output: true, boolean

// Example 6: Number to Boolean
let numberToBoolean = 0; // 0 is falsy in JavaScript
let boolValue = Boolean(numberToBoolean); // Converts to false
console.log(`Number to Boolean: ${boolValue}, Type: ${typeof boolValue}`); // Output: false, boolean

/**
 * Even or Odd Checker:
 * 
 * Write a program that checks if a given number is even or odd.
 * The function takes a number as input and logs whether it is even or odd.
 * 
 * @param {number} num - The number to check.
 */
function checkEvenOrOdd(num) {
    try {
        if (num % 2 == 0) {
            console.log("Number is even");
        } else {
            console.log("Number is odd");
        }
    } catch (error) {
        console.log(error);
    }
}

// Call the function with a sample number
let result = checkEvenOrOdd(10);

/**
 * FizzBuzz Program:
 * 
 * Write a program that prints numbers from 1 to 50. For multiples of 3,
 * print "Fizz" instead of the number. For multiples of 5, print "Buzz"
 * instead of the number. For numbers that are multiples of both 3 and 5,
 * print "FizzBuzz".
 * 
 * @param {number} i - The number to check for multiples.
 */
function checkingMultiples(j) {
        if (j % 3 === 0 && j % 5 === 0) { // Check for FizzBuzz first
            console.log("FizzBuzz");
        } else if (j % 3 === 0) {
            console.log("Fizz");
        } else if (j % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(j); // Print the number itself if not a multiple of 3 or 5
        }
    }

// Call the function with the desired limit
checkingMultiples(50); // This will print from 1 to 50

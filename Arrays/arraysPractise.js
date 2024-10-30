/**
 * Approach 1: Using a traditional `for` loop.
 * Function to separate even and odd numbers from an array.
 * 
 * - This approach uses a standard `for` loop with a conditional to check for even/odd values.
 * - Good for performance with direct iteration.
 * 
 * @param {number[]} arr - Array of numbers to be filtered.
 * @returns {{even: number[], odd: number[]}} An object containing two arrays:
 *                  - `even`: Array of even numbers from the input
 *                  - `odd`: Array of odd numbers from the input
 */
function filterEvenOdd(arr) {
    let evenNumbers = [];
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        } else {
            oddNumbers.push(arr[i]);
        }
    }
    return { even: evenNumbers, odd: oddNumbers };
}

/**
 * Approach 2: Using `for...of` loop with a ternary operator.
 * 
 * - This approach uses the `for...of` loop, which is generally clean and readable.
 * - Uses a ternary operator to handle the even/odd logic concisely.
 * 
 * Note:
 * - While slightly more concise, it performs similarly to the `for` loop.
 * 
 * @param {number[]} arr - Array of numbers to be filtered.
 * @returns {[number[], number[]]} An array containing two arrays:
 *                  - First array: Array of even numbers
 *                  - Second array: Array of odd numbers
 */
function filterEvenOddTernary(arr) {
    let evenNumbers = [], oddNumbers = [];
    for (const num of arr) {
        (num % 2 === 0 ? evenNumbers : oddNumbers).push(num);
    }
    return [evenNumbers, oddNumbers];
}

/**
 * Approach 3: Using the `reduce` method.
 * 
 * - This approach uses `Array.reduce` to categorize the numbers into even and odd.
 * - While functional and clean, `reduce` introduces a slight performance overhead due to the function call on each iteration.
 * 
 * Performance Note:
 * - This method is less performant for very large arrays compared to the `for` or `for...of` loop.
 * - Suitable for concise code and moderate-sized arrays.
 * 
 * @param {number[]} arr - Array of numbers to be filtered.
 * @returns {[number[], number[]]} An array containing two arrays:
 *                  - First array: Array of even numbers
 *                  - Second array: Array of odd numbers
 */
function filterEvenOddReduce(arr) {
    return arr.reduce(
        ([evenNumbers, oddNumbers], num) => {
            (num % 2 === 0 ? evenNumbers : oddNumbers).push(num);
            return [evenNumbers, oddNumbers];
        },
        [[], []]
    );
}

/**
 * Function to replace negative numbers in an array with zero.
 * 
 * - This function iterates through the input array, checks each number, and replaces any negative values with zero.
 * - Non-negative numbers are left unchanged.
 * 
 * @param {number[]} arr - Array of numbers to be modified.
 * @returns {number[]} The modified array with negative numbers replaced by zero.
 */
function replaceNegatives(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push(0);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/**
 * Function to return numbers greater than the average in an array.
 * 
 * - First calculates the average of all numbers in the array.
 * - Then, returns an array of numbers that are greater than the calculated average.
 * 
 * @param {number[]} arr - Input array of numbers.
 * @returns {number[]} Array of numbers greater than the average.
 */
function greaterThanAverage(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let average = sum / arr.length;
    let finalResult = arr.filter(num => num > average);
    return finalResult;
}

/**
 * Function to remove duplicate values from an array if they are greater than a specified threshold.
 * 
 * - Checks if each number exceeds the threshold; if so, it verifies if it's already in the result array.
 * - If it's unique or below the threshold, it adds it to the result.
 * 
 * @param {number[]} arr - The input array of numbers.
 * @param {number} threshold - The threshold value for filtering duplicates.
 * @returns {number[]} An array with duplicates removed for numbers greater than the threshold.
 */
function removeDuplicates(arr, threshold = 10) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > threshold && result.includes(num)) continue;
        result.push(num);
    }
    return result;
}

/**
 * Function to categorize numbers into small, medium, and large ranges.
 * 
 * - Uses conditional checks to assign each number to a category:
 *      - `small`: Numbers between 0 and 10 (inclusive)
 *      - `medium`: Numbers between 11 and 20 (inclusive)
 *      - `large`: Numbers above 20
 * 
 * @param {number[]} arr - Input array of numbers.
 * @returns {{small: number[], medium: number[], large: number[]}} An object categorizing numbers into three arrays:
 *                  - `small`: Array of small numbers
 *                  - `medium`: Array of medium numbers
 *                  - `large`: Array of large numbers
 */
function categorizeNumbers(arr) {
    let categories = {
        small: [],
        medium: [],
        large: []
    };

    for (let num of arr) {
        num <= 10 
            ? categories.small.push(num)
            : num <= 20 
                ? categories.medium.push(num)
                : categories.large.push(num);
    }

    return categories;
}
/**
 * Function to replace values in an array based on divisibility rules:
 * - Numbers divisible by both 3 and 5 are replaced with "fizzbuzz".
 * - Numbers divisible by only 3 are replaced with "fizz".
 * - Numbers divisible by only 5 are replaced with "buzz".
 * 
 * @param {number[]} arr - Array of numbers to be processed.
 * @returns {(string|number)[]} A new array where numbers are replaced according to the rules.
 */
function replaceValues(arr) {
    let finalValues = [];
    
    for (let num of arr) {
        if (num % 3 === 0 && num % 5 === 0) {
            finalValues.push("fizzbuzz");
        } else if (num % 3 === 0) {
            finalValues.push("fizz");
        } else if (num % 5 === 0) {
            finalValues.push("buzz");
        } else {
            finalValues.push(num);  // Keep the original number if none of the conditions match
        }
    }
    
    return finalValues;
}

// console.log(replaceValues([1, 3, 5, 15, 8])); // Output: [1, "fizz", "buzz", "fizzbuzz", 8]
/**
 * Function to move all zeros in an array to the end,
 * while maintaining the order of non-zero elements.
 * 
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} The modified array with all zeros at the end.
 */
function moveZerosToEnd(arr) {
    let nonZeroIndex = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            if (nonZeroIndex !== i) {
                [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]]; 
            }
            nonZeroIndex++;
        }
    }
    return arr;
}
console.log(moveZerosToEnd([1, 0, 2, 0, 3, 0, 4])); // Output: [1, 2, 3, 4, 0, 0, 0]
console.log(filterEvenOdd([1, 2, 3, 4, 5, 6])); // Output: { even: [2, 4, 6], odd: [1, 3, 5] }
console.log(filterEvenOddTernary([1, 2, 3, 4, 5, 6])); // Output: [[2, 4, 6], [1, 3, 5]]
console.log(filterEvenOddReduce([1, 2, 3, 4, 5, 6])); // Output: [[2, 4, 6], [1, 3, 5]]
console.log(replaceNegatives([-1, 2, -3, 4, -5])); // Output: [0, 2, 0, 4, 0]
console.log(greaterThanAverage([1, 2, 3, 4, 5, 6])); // Output: [5, 6]
console.log(removeDuplicates([5, 15, 20, 5, 10, 15])); // Output: [5, 15, 20, 10]
console.log(categorizeNumbers([5, 15, 25, 8, 12, 21])); // Output: { small: [5, 8], medium: [15, 12], large: [25, 21] }


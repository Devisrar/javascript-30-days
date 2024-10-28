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

console.log(filterEvenOdd([1, 2, 3, 4, 5, 6]));


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

console.log(filterEvenOddTernary([1, 2, 3, 4, 5, 6]));


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
console.log(filterEvenOddReduce([1, 2, 3, 4, 5, 6]));

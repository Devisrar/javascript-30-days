// Best practices for variable declarations in JavaScript

// Use const for variables that should not be reassigned
const emailId = "israr.exs@gmail.com"; // Email ID is constant

// Use let for variables that might change
let accountId = 2134; // Initial account ID
accountId = 34344; // Updating account ID

// Avoid re-declaring variables, especially with var
let houseAddress = "Isb i-10/3 street 9"; // Initial address
houseAddress = "hjdsafDFGkf"; // Updating house address

// Log the variables to the console in a table format
console.table([emailId, accountId, houseAddress]);

/*
Why we avoid 'var':
- 'var' is function-scoped, not block-scoped, leading to unexpected behavior.
- Instead, we use 'const' for constants and 'let' for variables that need to be reassigned, following ECMAScript standards.
*/

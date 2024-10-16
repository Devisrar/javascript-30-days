/*
1. Traffic Light System
Write a function that simulates a traffic light. 
The function takes a string ("red", "yellow", or "green") 
as input and returns the appropriate action:

"red": Return "Stop"
"yellow": Return "Get ready"
"green": Return "Go"
*/
function trafficLight(color) {
if(color==="red"){
    return `stop`
}
else if(color==="yellow"){
    return `Get ready`
}
else if(color==="green"){
    return `Go`
}
else {
    return `you got a challan of $5`
}
}
console.log(trafficLight("red"));

/*
2. Online Shopping Discount
Write a function that calculates the final price 
after applying a discount based on the total amount spent. The discount rules are:

If the total amount is less than $100, no discount.
If the total is between $100 and $500, apply a 10% discount.
If the total is over $500, apply a 20% discount.

*/
function calculateDiscount(totalAmount) {
    if (totalAmount < 100) {
        return `No discount. Final price: $${totalAmount}`;
    } 
    else if (totalAmount >= 100 && totalAmount <= 500) {
        const discount = totalAmount * 0.10; // Calculate 10% discount
        const finalAmount = totalAmount - discount;
        return `You got a 10% discount of $${discount}. Final price: $${finalAmount}`;
    } 
    else if (totalAmount > 500) {
        const discount = totalAmount * 0.20; // Calculate 20% discount
        const finalAmount = totalAmount - discount;
        return `You got a 20% discount of $${discount}. Final price: $${finalAmount}`;
    } 
    else {
        return `No discount. Final price: $${totalAmount}`;
    }
}

console.log(calculateDiscount(100));
console.log(calculateDiscount(250));
console.log(calculateDiscount(600));

/*
3. Login System
Write a function that simulates a basic login system.
 The function takes two inputs: a username and a password. 
 If the username is "admin" and the password is "1234", return "Login successful". 
 Otherwise, return "Invalid credentials".
*/
function loginSystem(username, password) {
    if (username === "admin" && password === "1234") { // Compare password as a string
        return "Login successful";
    } else {
        return "Invalid credentials";
    }
}

console.log(loginSystem("israr", "1234"));  // Incorrect username
console.log(loginSystem("admin", "1234"));  // Correct username and password
console.log(loginSystem("admin", "wrongPassword"));  // Correct username, wrong password
console.log(loginSystem("admin", 1234));    // Correct username, numeric password (invalid)



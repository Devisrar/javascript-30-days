/*
Write a function that simulates a basic ATM machine. The function takes two arguments:
The current balance in the account.
The amount the user wants to withdraw.
If the balance is less than the amount requested, 
eturn a message like "Insufficient funds." Otherwise, 
return the new balance after withdrawal.
*/

function atmMachine(balance, withdrawAmount) {
    if (balance < withdrawAmount) {
        return `Insufficient funds. Your balance is ${balance}.`;
    } else {
        balance = balance-withdrawAmount;
        return `Amount ${withdrawAmount} withdrawn successfully. New balance is ${balance}.`;
    }
}

console.log(atmMachine(5000, 10000)); 
console.log(atmMachine(5000, 3000));  

/*
Write a function 
that takes a number and checks if it falls within a certain range 
(e.g., between 10 and 100, inclusive). 
Return true if it does, otherwise return false.
*/

function isInRange(num) {
    if(num>9&&num<=100){
        return true;
    }  
  
    else{ 
       return false;        
  }
}
console.log(isInRange(2));
console.log(isInRange(50)); 

/*
Write a function that takes a 24-hour time 
(e.g., 14:30) as input and returns a greeting based on the time:

00:00 to 11:59: "Good morning"
12:00 to 17:59: "Good afternoon"
18:00 to 23:59: "Good evening"
*/
function timeOfDayGreeting(time) {
    const hours = parseInt(time.split(':')[0], 10); 

    if (hours >= 0 && hours < 12) {
        return 'Good morning';
    } else if (hours >= 12 && hours < 18) {
        return 'Good afternoon';
    } else if (hours >= 18 && hours <= 23) {
        return 'Good evening';
    } else {
        return 'Invalid time';
    }
}

console.log(timeOfDayGreeting("01:00")); // Good morning
console.log(timeOfDayGreeting("11:59")); // Good morning
console.log(timeOfDayGreeting("14:30")); // Good afternoon
console.log(timeOfDayGreeting("18:00")); // Good evening
console.log(timeOfDayGreeting("24:00")); // Invalid time (hours should be between 0 and 23)





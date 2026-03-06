// What is Conditional Statements in JavaScript?
/*
Conditional statements are used to perform different actions based on different conditions.
// In JavaScript, we have the following conditional statements:
// 1. if statement
// 2. if...else statement
// 3. if...else if...else statement
// 4. switch statement */

// Number is +ve, -ve or 0

let num = 8;
if (num > 0) {
    console.log("Number is Positive")
}
else if (num == 0) {
    console.log("Number is Zero")
}
else {
    console.log("Number is Negative")
}


// write a program to chec the stuednt grade
let mars = 35;
if (mars >= 90) {
    console.log("A+");
}
else if (mars >= 80) {
    console.log("B+");
}
else if (mars >= 70) {
    console.log("C+");
}
else if (mars >= 50) {
    console.log("D+");
}
else {
    console.log("Fail");
}


// what is difference between if..else?
/*
The if statement is used to execute a block of code if a specified condition is true. If the condition is false, the code block will be skipped.
*/

// write a scritp to print all the even numbers from 1 to 10;
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

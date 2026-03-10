// What is conditional statements

Conditional statement is used to chec for the condition whether it is true or false, based on this we can execute our desire things/values.

//=====================================
// What is the difference between if-else and ternary operator?

if-else is used in multiple line while the ternary oprator are used for the saame purpose with in one line
 
//=====================================
// Write a script to print all even numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Write a JavaScript program to check if a number is divisible by 5 using a while loop.
let num = 25;
while (true) {
    if (num % 5 == 0) {
        console.log("Divisble by 5");
        break;
    }
    else {
        console.log("Not divisble by 5");
        break;
    }
}
//=====================================

// Explain the difference between while and do-while loops with examples.
// While loop is used to repeat based on the condition repeat until the condtion become false.
// Example
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do-While loop must run one time weather the condition is, Still the do-whil loop one time. Condition are given in the end of the do-while loop bloc
// Example

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

//=====================================

// Write a program that prints the multiplication table of a number using a for loop.
for (let i = 1; i <= 10; i++) {
    let result = i * 2;
    console.log(`2 x ${i} = ${result}`);
}

//=====================================
// Create a program to count the number of digits in a given number using a while loop.

let num = 23420340238757034048520;
let count = 0;
while (num > 0) {
    num = Math.floor(num / 10) //rembve last value
    count++;
}
console.log(count);

//=====================================

// Write a program to print numbers from 10 to 1 using a for loop (reverse order).

 for (let i = 10; i > 0; i--) {
    console.log(i);
}

//=====================================

/* Write a script that asks the user to input numbers until the sum of all entered
numbers is greater than 100. */

let result = 0;
while (true) {
    let num = Number(prompt("Enter Number"));
    result += num;
    if (result > 100) {
        break;
    }
}
console.log(result); 
//=====================================
/* function greating() {
    console.log("Hello Mr Qasim");
}
greating()

function addition(num = 0, num1 = 0) {
    console.log(num + num1);
}
addition(10, 59)

const name1 = "Qasim";
function greating(great = "hello") {
    console.log(great, name1);
}
greating();




function sub(num1 = 10, num2 = 5) {
    return num1 - num2
}
const total = sub();
console.log(total);


const addition = () => {
    return 2 + 3;
}
console.log(addition());


let arr1 = [90, 87, 93, 99, 39];
arr1.map((value) => {
    console.log(value + 20);
})



let arr = [90, 87, 93, 99, 39];
arr.forEach((value) => {
    console.log(value + 10);
})


let num = [1, 2, 3];
const newArr = num.map((n) =>
    n * 2
)
console.log(newArr);


let Arr = [1, 2, 3];
const newArr = Arr.forEach((n) => n + 1);
console.log(Arr);
console.log(newArr);




//==================================================

// 1.  What is a function in JavaScript? Create a function to calculate the square of a
// number:
// ANS:  Funtion is the bloc of code the do spacific tasc.


function squre(num) {
    console.log(num * num);
}
squre(3);

//===================================================
//Q2: Write a function that takes two numbers as input and returns their product
// Ans:
const product = (num1, num2) => {
    const result = num1 * num2
    console.log(result);
}
let num1 = Number(prompt("Enter First number"))
let num2 = Number(prompt("Enter Second number"))
product(num1, num2)


//===================================================
// Q3: Declare an array of colors. Add a new color to the end and remove the first color
// Ans:
let arr = ["Blue", "Green", "Blac", "white", "yellow"]
console.log(arr);
arr.push("Red")
console.log(arr);
//===================================================
// Q4: Create an array of numbers and find the sum of all numbers using a loop
// Ans:
let num = [10, 20, 30, 40, 50]
let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
}
console.log(sum);
//===================================================
// Q5:  Create an object car with properties make, model, and year. Print each property
// Ans:
const car = {
    colour: "blue",
    model: 1998,
    tyre: "MRF"
}
console.log(car.colour);
console.log(car.model);
console.log(car.tyre);

//===================================================
// Q6:. Write a function isEven() that checks if a number is even or odd
// Ans:

const isEven = (num) => {
    if (num % 2 == 0) {
        console.log(`Yes ${num} is an even numvber`);
    }
    else {
        console.log(`No the ${num} is not an even number `);
    }
}
isEven(3);


//===================================================
// Q7: Create an array of student names. Use a loop to print each name
// Ans:
let names = ["Qasim", "Umar", "Waqas", "Shahzad"]
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//===================================================
// Q8: Write a function that takes an array of numbers and returns the largest number.
// Ans:
function largestArr(num) {
    let large = num[0]
    for (let i = 0; i < num.length; i++) {
        if (num[i + 1] > large) {
            large = num[i + 1];
            console.log();
        }
    }
    console.log(large);
}

let arr = [1, 10, 39, 29, 33,];
largestArr(arr)
//===================================================
// Q9:  Create an object person with properties firstName and lastName. Write a function
// to display the full name
// Ans:
const names = {
    firstName: "Muhammad",
    lastName: "Qasim"
}
const fullName = () => {
    console.log(`${names.firstName} ${names.lastName}`);
}
fullName();
//===================================================
// Q2: Write a program to reverse the elements of an array without using any built-in methods
// Ans: 

let arr = [4, 5, 6, 7, 8, 9, 0, 2, 3, 7, 6];
const reverseFun = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
reverseFun(arr) */


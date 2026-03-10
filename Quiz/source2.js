//-------------------------------------------------------------------
// Q1: Explain the MERN stac and how javasctipt is all parts of it
// ANS: MERN is the collection of technology which is for web developement speceifaclly where we use  following tech stac
// M: MongoDB( used to store the bacend)
// E: Express(Library of the mongodb)
// R: React(FrontEnd library) to split grand project into componets
// N: Node(used for  bacend store qurey running fetch data from the server)
//-------------------------------------------------------------------
// Q2: Create a js progame to tac input form the user and perform arithematic opreator
// ANS:


let num1 = Number(prompt("Enter a 1st number "));
let num2 = Number(prompt("Enter a 2nd number "));
let sum = num1 + num2;
console.log(sum);
//-------------------------------------------------------------------
// Q3:Write a program to generate a number guessing game, using loop and condtion
// ANS:
let guess = 10;
while (true) {
    let num = Number(prompt("Enter a number to guess"))
    if (num == guess) {
        console.log("Correct guess");
        break;
    }
    else {
        console.log("incorrect guess");
    }
}
//-------------------------------------------------------------------
// Q4: Create a program that as the user to enter number until the total exceeds 100.
// ANS:
let result = 0;
while (true) {
    let num = Number(prompt("Enter a number to up 100"))
    result += num
    if (result >= 100) {
        console.log("Number exceed then 100");
        break;
    }
}
console.log(result);
//-------------------------------------------------------------------
// Q5:Explain how javaScript improves user expreince in the modren web application
/* ANS: In modern Javasript mean's ES7 version of the javasricpt include the concept of the fechting data from the servery smoothely,
 modren javasrcipt involves the concepts of the async await which mae the website more effectient in term of fetching data and displying data on the client side.
*/
//-------------------------------------------------------------------

/* console.log("hello");
console.log("that is my first program"); */


/* async function getData() {
    const data = await fetch("https://api.github.com/users");
    const response = await data.json();
    response.map((names) => {
        console.log(names.login.length);
    })
}
getData() */


/* function CreateCouter() {
    let count = 0;

    return function () {
        count++;
        return count
    }
}
const myCounter = CreateCouter();
console.log(myCounter()); */

/* const data = { name: "qasim", age: 21, spaciality: "MERN Stac application" }
const { name, age } = data;
console.log(age); */


/* 
const arr = ['meat', 'tomato', 'boo', 'bag']
const newArray = [...arr, 786]
console.log(newArray);
 */

/* 
async function FetchNames() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    data.filter((item) => {
        if (!item.email)
            console.log(item);
    })

     for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
    } 
}
FetchNames() 

*/
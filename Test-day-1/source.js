//==============================================================
// Q: 1
// Ans: Do-While



//==============================================================
// Q: 2
// Ans: 0 1 2
//==============================================================
// Q: 3
// Ans: forEach
//==============================================================
// Q: 4
// Ans: Stop loop Completely
//==============================================================
// Q: 5
// Ans:
//==============================================================
// Q: 6
// Ans: All of the above let const var
//==============================================================
// Q: 7
// Ans: null
//==============================================================
// Q: 8
// Ans: 22
//==============================================================
// Q: 9
// Ans: Float
//==============================================================
// Q: 10
// Ans: //



/////             Section B               //////


//==============================================================
// Q: 11
// Ans: Document.getElementById()
//==============================================================
// Q: 12
// Ans: innerHTML
//==============================================================
// Q: 13
// Ans: Select first element with class 'box'
//==============================================================
// Q: 14
// Ans: oninput
//==============================================================
// Q: 15
// Ans: createElement()
//==============================================================
// Q: 16
// Ans: remove()
//==============================================================
// Q: 17
// Ans: DOM Manipulation


/////                Section C
//==============================================================
// Q: 18
// Ans: res.json()
//==============================================================
// Q: 19
// Ans: promis
//==============================================================
// Q: 20
// Ans: 200
//==============================================================
// Q: 21
// Ans: Promose
//==============================================================
// Q: 22
// Ans: function only
//==============================================================
// Q: 23
// Ans: function passed as argument
//==============================================================
// Q: 24
// Ans: Nested Loop
//==============================================================
// Q: 25
// Ans: Error Handling
//==============================================================
// Q: 26
// Ans: try



//////////   Section D         ///////////////


// Q 1:
// Ans:
/*
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
 */

// Q 2:
// Ans:
/* for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
} */


// Q 3:
// Ans:
/* const fruits = ['apple', 'banana', 'mango']

fruits.forEach((items) => {
    console.log(items);
})
 */

// Q 4:
// Ans:
/* const arr = [1, 3, 4, 6, 7, 10];
for (let i = arr.length; i >= 0; i--) {
    console.log(arr[i]);
} */

// Q 5:
// Ans:

/* let count = 0;
const arr2 = [2, 3, 4, 6, 7, 21, 53, 42, 33, 10, 11]
for (let i = 0; i <= arr2.length; i++) {
    if (arr2[i] > 10) {
        count = count + 1;
    }
}
console.log(count);
 */











///////////    Section E       ////////


// Q 1:
// Ans: 
/* const data = document.querySelector('.box').innerText
console.log(data);

 */
/* 
let total = 0
function HandleClicIncrement() {
    total = total + 1;
    let val = document.querySelector('.total').textContent
    val = total;
    document.querySelector('.total').textContent = val;
    console.log(val);
}
function HandleClicDecrement() {
    total = total - 1;
    let val = document.querySelector('.total').textContent
    val = total;
    document.querySelector('.total').textContent = val;
    console.log(val);
}
 */


async function posts() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const recods = await data.json();
    console.log(recods);

    recods.map((item) => {
        const li = document.createElement("li")
        li.innerHTML = item.title
        document.querySelector('.totalUsers').appendChild(li)
    })
    if (!recods) {
        let status = document.getElementsByClassName('fetch').innerText
        status = 'loading.....'
    }
}





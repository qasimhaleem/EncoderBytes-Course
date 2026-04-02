let form = document.getElementById("myForm");
let error = document.getElementById("errorMsg")

form.addEventListener('submit', function (event) {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    let Cpassword = document.
        getElementById("Cpassword").value;
    console.log(password, Cpassword);
    if (fname == "" || lname == "" || email == "" || date == "" || phone == "" || password == "" || Cpassword == "") {
        event.preventDefault()
        error.innerText = "All field are mendatory to be filled"
    }
    if (password != Cpassword) {
        event.preventDefault()
        error.innerText = "Password does not match"
    }
    else {
        alert("Form Submitted Successfully")
    }

})
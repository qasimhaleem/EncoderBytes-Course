function fun() {
    let details = [...document.querySelectorAll('input')];
    const data = details.map((inp) =>
        inp.value
    )
    console.log(data);
    alert("Successfully login/register   " + data[0])
}
const btn = document.getElementById('btn');
btn.setAttribute('onclick', 'fun()')

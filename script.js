let x = document.getElementById('email');
let y = document.getElementById('info');
let mail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi;
let z = document.getElementById('button');

function myFunction() {
    if (x.value.match(mail)) {
        y.innerHTML = "";
    } else {
        y.innerHTML = "Please provide a valid email";
        y.style.display = "block";
        x.style.borderColor = "red";
        y.style.fontSize = "14px";
        y.style.marginTop = "5px";
        y.style.marginBottom = "0px";
        y.style.color = "red";
        y.style.fontStyle = "italic";
    }
}

z.addEventListener("click", myFunction)
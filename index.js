let form = document.querySelector(".form")
let fornavn = document.querySelector("#Firstname")
let lastName = document.querySelector("#Lastname")
let Address = document.querySelector("#address")
let Username = document.querySelector("#username")
let Password = document.querySelector("#password")
let Email = document.querySelector("#email")

form.addEventListener("submit", function (event) {
    event.preventDefault();



    if (form.Firstname.value == "") {
        fornavn.style.background = "red"

    }
    else {
        fornavn.style.background = "green"
    }
    if (form.Lastname.value == "") {
        form.Lastname.style.background = "red"
    }
    else {
        lastName.style.background = "green"
    }
    if (form.address.value == "") {
        form.address.style.background = "red"

    }
    else {
        form.address.style.background = "green"
    }
    if (Password.value == "") {
        Password.style.background = "red"

    }
    else {
        Password.background
    }
    if (Username.value == "") {
        Username.style.background = "red"

    }
    else {
        Username.style.background == "green"
    }
    if (Email.value == "") {
        Email.style.background = "red"

    }
    else {
        form.email.style.background = "green"
    }



})






let subscribeForm = document.getElementById("subscribeForm");

let nameElement = document.getElementById("name");
let emailElement = document.getElementById("email");

let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");

nameElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "required*";
        nameErrMsg.style.color = "Red";
    } else {
        nameErrMsg.textContent = "";
    }
});
emailElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "required*";
        emailErrMsg.style.color = "Red";
    } else {
        emailErrMsg.textContent = "";
    }
});
subscribeForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

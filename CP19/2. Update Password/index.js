let updatePasswordForm = document.getElementById("updatePasswordForm");

let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");

let newPasswordErrMsg = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsg = document.getElementById("confirmPasswordErrMsg");

let validateNewPassword = function() {
    if (newPassword.value === "") {
        newPasswordErrMsg.textContent = "Required*";
    } else {
        newPasswordErrMsg.textContent = "";
    }
};

let validateConfirmPassword = function() {
    if (newPassword.value !== confirmPassword.value) {
        confirmPasswordErrMsg.textContent = "Passwords must be same";
    } else {
        confirmPasswordErrMsg.textContent = "";
    }
};
newPassword.addEventListener("blur", validateNewPassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);
updatePasswordForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConfirmPassword();
});

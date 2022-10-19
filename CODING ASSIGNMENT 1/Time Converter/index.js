let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");

convertBtn.addEventListener("click", function() {
    if (hoursInput.value === "") {
        errorMsg.textContent = "Please enter a valid number of minutes";
    } else if (minutesInput.value === "") {
        errorMsg.textContent = "Please enter a valid number of minutes";
    } else {
        let result = parseInt(hoursInput.value) * 3600 + parseInt(minutesInput.value) * 60;
        timeInSeconds.textContent = result + "s";
    }
});

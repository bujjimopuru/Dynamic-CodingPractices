let questionsForm = document.getElementById("questionsForm");

let cityHyderabad = document.getElementById("cityHyderabad");
let cityChennai = document.getElementById("cityChennai");
let cityDelhi = document.getElementById("cityDelhi");
let cityMumbai = document.getElementById("cityMumbai");
let resultMsg = document.getElementById("resultMsg");

let selectedCity = null;
let capitalCity = "Delhi";

cityHyderabad.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityChennai.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityDelhi.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityMumbai.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

questionsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedCity === null) {
        resultMsg.textContent = "Please select the city";
        resultMsg.style.color = "#dc3545";
    } else if (selectedCity === capitalCity) {
        resultMsg.textContent = "Correct Answer!";
        resultMsg.style.color = "#2b9a40";
    } else {
        resultMsg.textContent = "Wrong Answer!";
        resultMsg.style.color = "#dc3545";
    }
    
});

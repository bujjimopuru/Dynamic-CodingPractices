let numbers = [17, 31, 77, 20, 63];
let userInputElement = document.getElementById("userInput");
let findBtnElement = document.getElementById("findBtn");
let indexOfNumberElement = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
    let number = parseInt(userInputElement.value);
    let itemIndex = numbers.findIndex(function(eachItem) {
        if (eachItem === number) {
            return true;
        } else {
            return false;
        }

    });

    indexOfNumberElement.textContent = itemIndex;
}

let gameResultElement = document.getElementById("gameResult");
let userinputElement = document.getElementById("userInput");
let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");

let successMessage = "Congratulations! you got it right.";
let tryAgainMessage = "Please try again";

function restartGame() {
    let firsRandonNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    
    firstNumberElement.textContent = Math.ceil(firsRandonNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);
    gameResultElement.textContent = "";
    userinputElement.value = "";
}

restartGame();

function checkResult() {
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let secondRandomInteger = parseInt(secondNumberElement.textContent);
    let userEnteredSum = parseInt(userinputElement.value);
    
    let sumOfTwoIntegers = firstRandomInteger + secondRandomInteger;

    if (userEnteredSum === sumOfTwoIntegers) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "#028a0f";
    } 
    else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}

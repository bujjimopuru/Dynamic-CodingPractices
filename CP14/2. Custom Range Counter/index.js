let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterValue = document.getElementById("counterText");

function displayNumbers(fromCount, toCount) {
    let currentCount = fromCount;
    counterValue.textContent = currentCount;
    
    let timerId = setInterval(function() {
        if (currentCount < toCount) {
            currentCount += 1;
            counterValue.textContent = currentCount;
        } else {
            clearInterval(timerId);
        }
    }, 1000);
}
function onClickStart() {
    let fromVal = fromUserInputEl.value;
    let toVal = toUserInputEl.value;
    
    if (fromVal === "") {
        alert("enter the from value");
    } else if (toVal === "") {
        alert("enter the to value");
    } else {
        let fromValInteger = parseInt(fromVal);
        let toValInteger = parseInt(toVal);
        
        displayNumbers(fromValInteger, toValInteger);
    }
}

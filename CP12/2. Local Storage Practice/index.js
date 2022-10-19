let msgElement = document.getElementById("msg");
let saveBtnElement = document.getElementById("saveBtn");
let clearBtnElement = document.getElementById("clearBtn");

let storageKey = "userInput";

saveBtnElement.onclick = function() {
    let msgVal = msgElement.value;
    localStorage.setItem(storageKey, msgVal);
};

clearBtnElement.onclick = function() {
    msgElement.value = "";
    localStorage.removeItem(storageKey);
};

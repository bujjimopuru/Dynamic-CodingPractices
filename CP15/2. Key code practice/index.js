let inputElement = document.getElementById("userInput");
let keyCodeList = document.getElementById("keyCodeList");

function createAppendKeyCode(keyCode) {
    let listItemElement = document.createElement("li");
    listItemElement.classList.add("mt-1");
    listItemElement.textContent = keyCode;
    keyCodeList.appendChild(listItemElement);
}

function onKeydown(event) {
    createAppendKeyCode(event.keyCode);
}

inputElement.addEventListener("keydown", onKeydown);

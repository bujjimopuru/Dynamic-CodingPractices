let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");

let errorMsg = "please enter a word";

function createAndAddWordToWordCloud(word) {
    
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let wordE1 = document.createElement("span");

    wordE1.textContent = word;
    wordE1.style.fontSize = randomFontSize;
    wordE1.classList.add("m-3");
    
    wordsContainerEl.appendChild(wordE1);
    
}

for (let word of wordCloud) {
    createAndAddWordToWordCloud(word);
}

function onAddWordToWordCloud() {
    
    let userEneteredWord = userInputEl.value;
    if (userEneteredWord !== "") {
        userInputEl.value = "";
        errorMsgEl.textContent = "";
        createAndAddWordToWordCloud(userEneteredWord);
    } 
    else {
        errorMsgEl.textContent = errorMsg;
    }
    
}

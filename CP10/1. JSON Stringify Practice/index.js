let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [
    {
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];
let valesToStringify = [bikes, person, todos];

let jsonContainerElement = document.getElementById("jsonContainer");

function createAndAppendValue(stingifiedValue) {
    let valueContainerElement = document.createElement("div");
    valueContainerElement.classList.add("value-container");
    jsonContainerElement.appendChild(valueContainerElement);
    
    let valueElement = document.createElement("span");
    valueElement.textContent = stingifiedValue;
    valueElement.classList.add("value");
    valueContainerElement.appendChild(valueElement);
}

function convertToJSONString(value) {
    let stringifiedValue = JSON.stringify(value);
    createAndAppendValue(stringifiedValue);
}

for (let value of valesToStringify) {
    convertToJSONString(value);
}

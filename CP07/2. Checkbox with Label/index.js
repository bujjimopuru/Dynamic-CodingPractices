let checkboxLabelContainer = document.getElementById("checkboxWithLabelContainer");

checkboxLabelContainer.classList.add("text-center", "p-5");

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkbox";
checkboxLabelContainer.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkbox");
labelElement.textContent = "Click Me!";
labelElement.classList.add("ml-2");
labelElement.id = "checkboxLabel";
checkboxLabelContainer.appendChild(labelElement);

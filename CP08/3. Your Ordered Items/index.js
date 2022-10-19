let itemList = [
    {
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];
let itemsListContainerEl = document.getElementById("itemsListContainer");

function onDeleteItem(itemId) {
    let itemEl = document.getElementById(itemId);
    itemsListContainerEl.removeChild(itemEl);
}

function createAndAppendItem(item) {
    let itemId = "item" + item.uniqueNo;
    let buttonId = "button" + item.uniqueNo;
    
    let itemEl = document.createElement("li");
    itemEl.id = itemId;
    itemEl.classList.add("ordered-item");
    itemEl.textContent = item.itemName;
    itemsListContainerEl.appendChild(itemEl);
    
    let buttonElement = document.createElement("button");
    buttonElement.classList.add("btn", "btn-danger", "ml-3");
    buttonElement.textContent = "Cancel";
    buttonElement.id = buttonId;
    
    buttonElement.onclick = function() {
        onDeleteItem(itemId);
    };
    itemEl.appendChild(buttonElement);
}

for (let item of itemList) {
    createAndAppendItem(item);
}

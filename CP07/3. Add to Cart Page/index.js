let cartItemTextInputElement = document.getElementById("cartItemTextInput");
let cartItemContainerElement = document.getElementById("cartItemsContainer");

function onAddCartItem() {
    
    let cartItemText = cartItemTextInputElement.value;
    
    let cartItemElement = document.createElement("li");
    cartItemElement.textContent = cartItemText;

    cartItemTextInputElement.value = '';
    cartItemContainerElement.appendChild(cartItemElement);

}

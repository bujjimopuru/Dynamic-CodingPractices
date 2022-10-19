let bgContainerElement = document.getElementById("bgContainer");
let themeUserInput = document.getElementById("themeUserInput");
let headingElement = document.getElementById("heading");

function changeTheme(event) {
    if (event.key === "Enter") {
        let themeUserInputValue = themeUserInput.value;

        if (themeUserInputValue === "Light") {

            bgContainerElement.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
            headingElement.style.color = "#014d40";
        } 
        else if (themeUserInputValue === "Dark") {
            bgContainerElement.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
            headingElement.style.color = "#ffffff";
        } 
        else {
            alert("Please enter valid theme");
        }

    }
}

themeUserInput.addEventListener("keydown", changeTheme);

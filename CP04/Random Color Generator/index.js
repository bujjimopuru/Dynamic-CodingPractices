let bgCointerElement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");

let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

bgCointerElement.style.backgroundColor = bgColorsArray[0];

function onChangeBgColor() {
    let numberOfBgColors = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * numberOfBgColors);

    /** The 'randomBgColorIndex' ranges from 0 to 8.
     As the 'bgColorsArray' has undices up to 7,
     if the generated randomBgColorIndex is8,
      we are decrementing it by 1 and assigning 7 to it.*/
      
    if (randomBgColorIndex === numberOfBgColors) {
        randomBgColorIndex = numberOfBgColors - 1;
    }
    
    let randomBgColor = bgColorsArray[randomBgColorIndex];

    bgCointerElement.style.backgroundColor = randomBgColor;
}

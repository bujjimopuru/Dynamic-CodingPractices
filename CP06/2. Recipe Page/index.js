let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let ingredientsList=recipeObj.ingredients;

let recipeTitleElement=document.getElementById("recipeTitle");
let imgContainerElement = document.getElementById("imgContainer");
let imageElement=document.getElementById("img");
let ingredientsListContainerElement=document.getElementById("ingredientsListContainer");

recipeTitleElement.textContent = recipeObj.title;

imageElement.setAttribute("src",recipeObj.imgSrc);
imageElement.classList.add("w-100");
imgContainerElement.appendChild(imageElement);

for(let ingredient of ingredientsList){
let ingredientElement = document.createElement("li");
    ingredientElement.textContent = ingredient;
    ingredientElement.classList.add("ingredient");
    ingredientsListContainerElement.appendChild(ingredientElement);
}

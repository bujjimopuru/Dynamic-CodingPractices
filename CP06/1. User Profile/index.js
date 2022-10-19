let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainerElement = document.getElementById("profileContainer");
profileContainerElement.classList.add("text-center","d-flex","flex-column","justify-content-center");

let imgContainerElement = document.getElementById("imgContainer");

//create an userProfileImg and append it to the imgContainerElement

let imgElement = document.createElement("img");
imgElement.setAttribute("src",profileDetails.imgSrc);
imgElement.classList.add("profile-img");
imgContainerElement.appendChild(imgElement);

//create a nameElement and append it to the profileContainerElement

let nameElement = document.createElement("h1");
nameElement.classList.add("profile-name");
nameElement.textContent = profileDetails.name;
profileContainerElement.appendChild(nameElement);

//create an ageElement and append it to the profileContainerElement

let ageElement = document.createElement("p");
ageElement.classList.add("age");
ageElement.textContent = "Age: " + profileDetails.age;
profileContainerElement.appendChild(ageElement);

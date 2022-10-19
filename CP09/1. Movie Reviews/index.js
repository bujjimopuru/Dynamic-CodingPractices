let reviewsContainerElement = document.getElementById("reviewsContainer");
let titleInputElement = document.getElementById("titleInput");
let reviewTexteareaElement = document.getElementById("reviewTextarea");

function onAddReview() {
    let movieTitle = titleInputElement.value;
    let movieReview = reviewTexteareaElement.value;
    
    // Showing an alert message when movieTitle is empty
    if (movieTitle === "") {
        alert("Please Enter a movie title");
        return;
    }
    
    // Creating and appending movieTitleElement to the reviewsContainer
    let movieTitleElement = document.createElement("h1");
    movieTitleElement.textContent = "Movie Title:" + movieTitle;
    movieTitleElement.classList.add("movie-title");
    reviewsContainerElement.appendChild(movieTitleElement);

    //Creating and appending the movieReviewElement to the reviewsContainer
    let movieReviewElement = document.createElement("p");
    movieReviewElement.textContent = "Review: " + movieReview;
    reviewsContainerElement.appendChild(movieReviewElement);
    
    //Creating and appending to horizantalLine to the reviewsContainer after adding movieTitleElement and movieReviewElement
    let horizantalLineElement = document.createElement("hr");
    reviewsContainerElement.appendChild(horizantalLineElement);
    
    //clearing the values of titleInputElement and reviewTexteareaElement
    titleInputElement.value = "";
    reviewTexteareaElement.value = "";
}

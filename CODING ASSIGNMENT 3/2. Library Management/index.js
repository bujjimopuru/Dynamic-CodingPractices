let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {

        imageLink,
        author
    } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);
    let imageEl = document.createElement("img");
    imageEl.src = imageLink;
    resultItemEl.appendChild(imageEl);
    let auotherEl = document.createElement("p");
    auotherEl.textContent = author;
    resultItemEl.appendChild(auotherEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.add("d-none");
    if (searchResults.length !== 0) {
        searchResultsEl.textContent = "Popular Books";
        for (let result of searchResults) {
            createAndAppendSearchResult(result);
        }
    } else {
        searchResultsEl.textContent = "No reuslts found";
    }

}

function searchWikipedia(event) {
    if (event.key === "Enter") {

        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";

        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/book-store?title=" + searchInput;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}

searchInputEl.addEventListener("keydown", searchWikipedia);

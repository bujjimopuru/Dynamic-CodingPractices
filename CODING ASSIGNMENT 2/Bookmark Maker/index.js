// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");
let submitBtn = document.getElementById("submitBtn");
let formData = {
    siteName: siteNameInput.value,
    siteUrl: siteUrlErrMsg.value
};

siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
        siteNameErrMsg.style.color = "Red";
        siteNameErrMsg.classList.add("ml-3");
    } else {
        siteNameErrMsg.textContent = "";
    }
    bookmarkForm.siteNameInput = event.target.value;
});
siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
        siteUrlErrMsg.style.color = "Red";
        siteUrlErrMsg.classList.add("ml-3");
    } else {
        siteUrlErrMsg.textContent = "";
    }
    bookmarkForm.siteUrlInput = event.target.value;
});


function validateFormData(formData) {
    let {
        siteName,
        siteUrl
    } = formData;
    if (siteNameInput === "") {
        siteNameErrMsg.textContent = "Required*";
    }
    if (siteUrlInput === "") {
        siteUrlErrMsg.textContent = "Required*";
    }
}
submitBtn.onclick = function() {
    let bookmarkList = document.createElement("li");
    bookmarksList.appendChild(bookmarkList);
    bookmarkList.textContent = siteNameInput.value;
    let bookmarkList1 = document.createElement("li");
    bookmarksList.appendChild(bookmarkList1);
    let urlLink = document.createElement("a");
    urlLink.href = siteUrlInput.value;
    bookmarksList.textContent = urlLink;
    bookmarksList.appendChild(urlLink);
}

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
});

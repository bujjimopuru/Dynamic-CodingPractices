let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById('sendPostRequestBtn');
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendHTTPRequest() {
    let requestUrl = "https://gorest.co.in/public-api/users";
    let requestBody = requestBodyEl.value;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 7036755a806c3b8c91d1081c03b7f99a43118bb0ef84e85745c380ee35a98c1a",
        },
        body: requestBody
    };
    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatusEl.classList.remove("d-none");
            loadingEl.classList.add("d-none");

            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        });
}
sendPostRequestBtnEl.addEventListener("click", sendHTTPRequest);

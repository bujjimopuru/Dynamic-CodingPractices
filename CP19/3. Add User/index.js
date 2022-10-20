let addUserForm=document.getElementById("addUserForm");

let name=document.getElementById("name");
let nameErrMsg=document.getElementById("nameErrMsg");

let email=document.getElementById("email");
let emailErrMsg=document.getElementById("emailErrMsg");

name.addEventListener("blur",function(event){
    if(event.target.value===""){
        nameErrMsg.textContent="Required*";
    }
    else{
        nameErrMsg.textContent="";
    }
});

email.addEventListener("blur",function(event){
    if(event.target.value===""){
        emailErrMsg.textContent="Required*";
    }
    else{
        emailErrMsg.textContent="";
    }
});

addUserForm.addEventListener("submit",function(event){
    event.preventDefault();
});

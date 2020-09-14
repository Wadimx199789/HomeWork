var eye=document.querySelector('.password-control');
var button=document.querySelector('.form-submit');
var password = document.getElementById("password-input");
var user=document.getElementById("input-name");

function show_hide(){
var password = document.getElementById("password-input");
if(password.getAttribute('type') == 'password'){
    eye.classList.add('view');
    password.setAttribute('type','text');
}
else{
    eye.classList.remove('view');
    password.setAttribute('type','password');
}
}
function redirect(){
    if(user.value == "Admin" && password.value == "12345"){
        window.location.href ="index.html";
    }
    else{
        console.log("error");
    }

}
button.addEventListener("keypress",e=>{
    if (e.keyCode === 13) {
         redirect();
        e.preventDefault();
    }
}, false);
eye.addEventListener('click',show_hide);
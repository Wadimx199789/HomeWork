var eye=document.querySelector('.password-control');

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
eye.addEventListener('click',show_hide);
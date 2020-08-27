let object={};
let key='bcdb7d11bef7e73df9c5';
object.button=document.querySelector(".form__button");
object.input=document.querySelector(".form__input");
object.container=document.querySelector(".container");

function checkWather(){
    let name=object.input.value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=`${name}` &appid=ccf36f09878b2f36d7c6a69e31fb8bbc')
    .then(function(resp){return resp.json()})
    .then(function(data){
        object.container.innerHTML="<h2>Погода `${data.main.temp}`</h2>"
    })
    
}
object.button.addEventListener("click",checkWather);
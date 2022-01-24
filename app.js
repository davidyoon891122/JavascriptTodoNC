const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form button");


function onLoginSubmit(tomato) {
    tomato.preventDefault();
    console.log(tomato);
    
}

loginForm.addEventListener("submit", onLoginSubmit);

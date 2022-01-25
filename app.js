const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form button");
const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault(); // stop default behavior
    console.log(event);
    
}

function handleLinkClick(event) {
    console.log(event)
    event.preventDefault();
    // alert("click")
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
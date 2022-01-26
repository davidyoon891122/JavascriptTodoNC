const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault(); // stop default behavior
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    printGreetings(userName);

}

function printGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}


const savedUserName = localStorage.getItem(USERNAME_KEY);

console.log(savedUserName);

if (savedUserName === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the name
    printGreetings(savedUserName);

}

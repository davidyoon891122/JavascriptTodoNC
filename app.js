const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function hanleLoginButtonClick() {
    console.log("Hello !" + loginInput.value);
}


loginButton.addEventListener("click", hanleLoginButtonClick);
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function hanleLoginButtonClick() {
    const userName = loginInput.value;
    
    console.log("Hello !" + userName);
    
}


loginButton.addEventListener("click", hanleLoginButtonClick);
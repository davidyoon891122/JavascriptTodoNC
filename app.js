const h1 = document.querySelector(".hello:first-child h1");




function handleClickEvent(){
    h1.classList.toggle("clicked"); 
    /* 
    if clicked is in classList, toggle will remove it, 
    if there is not clicekd in className, toggle will add clicked
    */
}


h1.addEventListener("click", handleClickEvent);


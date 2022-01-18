const h1 = document.querySelector(".hello:first-child h1");




function handleClickEvent(){
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}


h1.addEventListener("click", handleClickEvent);


const h1 = document.querySelector(".hello:first-child h1");




function handleClickEvent(){
    const currentClass = h1.className;
    const clickedClass = "clicked sexy-font";
    console.log(h1.className)
    let newClass;

    if (currentClass === clickedClass) {
        newClass = "";
    } else {
        newClass = clickedClass;
    }
    h1.className = newClass
}


h1.addEventListener("click", handleClickEvent);


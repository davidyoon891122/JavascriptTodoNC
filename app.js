// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// console.log(title)

const title = document.querySelector(".hello h1"); //.className tag return just one result(first element)
const titles = document.querySelectorAll(".hello h2");
const content = document.querySelector("#content");


console.dir(content.innerText);
console.log(titles);
console.log(title);

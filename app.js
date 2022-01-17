// conditional

const age = parseInt(prompt("How old are you?")) // It is not using anymore, can't custom and stop browser, get string data

console.log(typeof(age), age);
if (isNaN(age) || age < 0) {
    alert("Please write a positive number")
} else if (age < 18 ) {
    alert("you are not safified the condition")
}else if ( age > 18 && age < 50) {
    alert("you can drink")
}  else if ( age> 51 && age <= 80) {
    alert("you should exercise");
}else if ( age === 100) {
    alert("special event, you can get free items");
} else if ( age > 80) {
    alert("plase do not drink for your health condition");
} else {
    alert("too old");
}


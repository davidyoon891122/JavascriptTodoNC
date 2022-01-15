function sayHello(name, age) {
    console.log("Hello My name is" + name + ", age is " + age);
    return "Hello My name is" + name;
};


sayHello("david", 33);
sayHello("nico") // no argument will be undefined
sayHello("lynn");
// alert(sayHello("david"));


function plus(a, b) {
    return a + b
}

function divide(a,b) {
    return a / b;
}

console.log(plus());
console.log(plus(1,2));
console.log(plus(8, 60));

console.log(divide(1,2));
console.log(divide(2,0)); //python ZeroDivisionError
console.log(divide(0,5));

const player = {
    name: "davidYoon",
    sayHello: sayHello(),
    helloFunction: function(country) {
        console.log("hello "+ country);
    }
};

player.sayHello
player.helloFunction("Korea");
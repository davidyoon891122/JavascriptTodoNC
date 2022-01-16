// list, array
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// object
const player = {
    name: "DavidYoon",
    age: 34,
    company: "KIS Securities&Investment Company"
}
//pring all functions in console
// console.log(console);
console.log(player);
// add element
player.sexy = true;
console.log(player);

//function

function plus(a, b) {
    return a + b
}

console.log(plus(1,2));

const calculator = {
    add: function(a,b) {
        console.log(a+b);
    },
    subtract: function(a,b) {
        console.log(a - b);
    },
    mutiply: function(a,b) {
        console.log(a * b)
    },
    divide: function(a,b) {
        console.log(a/b);
    },
    power: function(a,b) {
        console.log(a ** b);
    }
}

calculator.add(1,2);
calculator.subtract(5,3);
calculator.mutiply(2,5);
calculator.divide(10,2);
calculator.power(3,3);
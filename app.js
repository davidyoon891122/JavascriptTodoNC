const calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    mutiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b
    },
    power: function(a,b) {
        return a ** b
    }
}

calculator.add(1,2);
calculator.subtract(5,3);
calculator.mutiply(2,5);
calculator.divide(10,2);
const result = calculator.power(3,3)
console.log(result);
const addResult = calculator.add(result, 10);
console.log(addResult);
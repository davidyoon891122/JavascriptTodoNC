// before use object
const playerName = "david";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit"

// use array but can't understand meaning of values
// player[0] == name...
// const player = ["david", 121212, false, "little bit"];


// object act like a dictionary
const player = {
    name: "david",
    points: 121212,
    handsome: false,
    fat: "littel bit",
};


console.log(player.name);
console.log(player["handsome"]);
player.handsome = true;
console.log(player.handsome); // object is still const but inside of object element can be modified
player.lastName = "potato";
console.log(player);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [
    mon,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun,
];

const nonsense = [1, 2, "Hello", false, null, undefined, ""];

console.log(daysOfWeek[0], nonsense[1]);
daysOfWeek.push("special");
console.log(daysOfWeek);
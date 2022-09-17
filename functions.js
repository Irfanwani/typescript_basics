"use strict";
// named function
function add(num1, num2, num3) {
    // adding ? after an argument makes it optional
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 4));
// arrow function
const sub = (num1, num2) => num1 - num2;
console.log(sub(3, 2));
// function expression
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(4, 5));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
// generic functions
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["irfan ", "wani"]);
console.log(concatResult, concatString);

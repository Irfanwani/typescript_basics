// named function
function add(num1: number, num2: number, num3?: number): number {
  // adding ? after an argument makes it optional
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(2, 4));

// arrow function
const sub = (num1: number, num2: number): number => num1 - num2;

console.log(sub(3, 2));

// function expression
const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};

console.log(mult(4, 5));

function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

// generic functions
function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);

let concatString = getItems<string>(["irfan ", "wani"]);


console.log(concatResult, concatString)
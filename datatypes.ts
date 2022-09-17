// string
let lname : string;

lname = 'John';

let newName = lname.toUpperCase()
console.log(newName)

// lname = 10;  // in js, we can do this but it creates problems later. In ts, we cannot assign a number to this variable as it was assigned a string first.So we cannot change the datatype here.

// number
let age : number;

age = 20;

// bool
let a : boolean = true;

// array of strings
let empList : string[] = ['irfan', 'wani'];

// array of numbers (another way of defining arrays with elements of same datatype)
let numarr : Array<number> = [1, 2, 3, 4];

// enum
const enum Color {
    Red,
    Green,
    Blue
}

let c : Color = Color.Blue;

// tuple
let swapNums : [number, number];

function swapNumbers(num1 : number, num2 : number) : [number, number] {
    return [num2, num1]
}

swapNums = swapNumbers(10, 20)

console.log(swapNums)


// any
// to create a variable of any type
let dept : any; // or let dept;

dept = 10;

dept = [1, 2, 'irfan'];

console.log(dept)

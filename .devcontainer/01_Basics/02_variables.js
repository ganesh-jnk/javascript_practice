const accountId=123
let accountName= "Ganesh"
var accountMail='ganesh.gmail.com'
let accountNumber;
// accountId=3455  not allowed to change
accountName="Umesh"

// const, let, var, and directly variable name we can give 
// const we can't change. 
// var Function-scoped. A variable declared with var is accessible throughout the entire function
//  in which it is declared.
// let Block-scoped. A variable declared with let is only accessible within the block 
// in which it is declared (e.g., inside a loop, conditional, or function). 
// This allows for better encapsulation and helps prevent unintended variable leaks.
console.log(accountId)
console.table([accountId,accountMail,accountName,accountNumber])

console.log(typeof accountId)
console.log(typeof(accountMail))


let temp="33abc"
let value=Number(temp)
console.log(value)
//NaN not a number

console.log(2+"2")
console.log(2+3+"2")

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;


console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// primitive data types:
// Number, String, Boolean, null, undefined, BigInt, Symbol
let symbol_a =Symbol("123");
let symbol_b= Symbol("123")
console.log(symbol_a===symbol_b)

// reference type or non-primitive
// function, objects, Arrays
const array_a=[1,"a", null]
let a_function=function(){
    console.log("In a funtion")
}
console.log(typeof a_function)

let myObj={myname:"Ganehs",
    age:25,
};
console.log(typeof myObj)

let myName="Ganesh"


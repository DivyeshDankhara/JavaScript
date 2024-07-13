// Function

// add();

// function add()
// {
//     console.log("Hello");
// }


// function sum(a,b){
//     return a + b;
// }
// function sum(a,b){
//     console.log("Total : ",a + b);
// }

// sum("a",10)
// let c = sum(10,12.8);
// console.log(c);


// Constructor

// let data = new Function("a","b",'return (a*b)');
// console.log(data(10,20));


// IIFE (Immediately Invoked Function Expression)

// (function hello(a,b){
//     console.log(a*b);
// })(11,5);


// Functon as avariable  (anonymous function)

// let data = function (a,b) {
//     console.log("sum is :- ", a + b);
//     return a*b
// }
// console.log(data(10,20));


// Arrow Function

// let hello = (a,b,c) => a*b*c
// console.log(hello(10,20,30));

// let hello = (a,b,c) => { return  a*b*c}
// console.log(hello(10,20,30));


// high order function
// function as object

// function sumAll(){
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++)
//         total += arguments[i];
//     return total;
//     // return arguments[0];
// }

// console.log(sumAll(2,3,4,15,55));


// reat parameter (...)

// function hello(...args){
//     return args;
// }

// console.log(hello(1,2,3,4,5,6));


// Generator

// function* test(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield "test";
//     return "hello"
// }

// let data = test();
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);


// this keyword

let person = {
    firstName : 'virat',
    lastName : 'Kohli',
    age : 34,
    hobbies : ['cricket','music','dance'],
    test: function(){
        console.log(`Player Info: ${this.firstName} ${this.lastName} his age is ${this.age} years old. and his hobbies is: ${this.hobbies[0]}`);
    }
}
person.test();
// Javscript async/await

// We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

{
    // async function name(parameter1, parameter2, ...paramaterN) {
    //     // statements
    // }

    // // name - name of the function
    // // parameters - parameters that are passed to the function     
}

// Async 

// the async keyword is used before the function to represent that the function is asynchronous.

{
    // // async function example

    // async function f() {
    //     console.log('Async function.');
    //     return Promise.resolve("SkillQode");
    // }

    // f(); 
    // f().then(data=>console.log(data))
    // console.log(f().then(data=>console.log(data)));
}

// this function returns a promise, you can use the chaining method then()

{
    // async function f() {
    //     console.log('Async function.');
    //     return Promise.resolve(1);
    // }
    
    // f().then(function(result) {
    //     console.log(result)
    // });

    // // the f() function is resolved and the then() method gets executed.
}

// JavaScript await Keyword

// The await keyword is used inside the async function to wait for the asynchronous operation.

// The syntax to use await is

{
    // let result = await promise;
}

// The use of await pauses the async function until the promise returns a result (resolve or reject) value. 

{
    // a promise
    // let promise = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //     resolve(1)}, 4000); 
    // });

    // // // async function
    // async function asyncFunc() {

    //     // wait until the promise resolves 
    //     let result = await promise; 

    //     console.log(result + 15);
    //     console.log('hello');
    // }

    // // calling the async function
    // asyncFunc();

    // // You can use await only inside of async functions.
}

// a Promise object is created and it gets resolved after 4000 milliseconds. Here, the asyncFunc() function is written using the async function.

// The await keyword waits for the promise to be complete (resolve or reject).

// hello is displayed only after promise value is available to the result variable.

// In the above program, if await is not used, hello is displayed before Promise resolved.

// This can be useful if there are multiple promises in the program.

{
    // let promise1 = new Promise(function (resolve, reject) {
    //         setTimeout(function () {
    //         resolve("Promise 1")}, 2000); 
    //     });
    // let promise2 = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //     resolve("Promise 2")}, 4000);
    // });
    // let promise3 = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //     resolve("Promise 3")}, 6000);
    // });

    // async function asyncFunc() {
    //     let result1 = await promise1;
    //     let result2 = await promise2;
    //     let result3 = await promise3;
        
    //     console.log(result1);
    //     console.log(result2);
    //     console.log(result3);
    // }
    // asyncFunc()
    // // In the above program, await waits for each promise to be complete.
}

// Error Handling.

// While using the async function, you write the code in a synchronous manner. And you can also use the catch() method to catch the error. 

{
    // asyncFunc().catch(
    //     // catch error and do something
    // )
}

// The other way you can handle an error is by using try/catch block.

{
//    // a promise
    // let promise = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //     reject('Promise resolved')}, 3000); 
    // });

//     // async function
    // async function asyncFunc() {
    //     try {
    //         // wait until the promise resolves 
    //         let result = await promise; 

    //         console.log("try Block: ",result);
    //     }   
    //     catch(error) {
    //         console.log("Catch Block",error);
    //     }
    // }

//     // calling the async function
    // asyncFunc(); // Promise resolved 

//     // we have used try/catch block to handle the errors. If the program runs successfully, it will go to the try block. And if the program throws an error, it will go to the catch block.
}

// Benefits of Using async Function

// The code is more readable than using a callback or a promise.
// Error handling is simpler.
// Debugging is easier.

// Note: These two keywords async/await were introduced in the newer version of JavaScript (ES8). Some older browsers may not support the use of async/await. 


// Javascript setInterval()

// In JavaScript, a block of code can be executed in specified time intervals. These time intervals are called timing events.

// There are two methods for executing code at specific intervals.

{
    // setInterval()
    // setTimeout()
}

// JavaScript setInterval()

// The setInterval() method repeats a block of code at every given timing event.

{
    // setInterval(function, milliseconds);

    // // function - a function containing a block of code
    // // milliseconds - the time interval between the execution of the function
    // // The setInterval() method returns an intervalID which is a positive integer.
}

// Display a Text Once Every 1 Second

{
    // // program to display a text using setInterval method
    // function greet() {
    //     console.log('Hello world');
    // }

    // setInterval(greet, 1000);

    // // the setInterval() method calls the greet() function every 1000 milliseconds(1 second).

    // // Hence the program displays the text Hello world once every 1 second.

    // // Note: The setInterval() method is useful when you want to repeat a block of code multiple times. For example, showing a message at a fixed interval.
}

// Display Time Every 5 Seconds

{
    // // program to display time every 5 seconds
    // function showTime() {

    //     // return new date and time
    //     let dateTime= new Date();

    //     // return the time
    //     let time = dateTime.toLocaleTimeString();

    //     console.log(time)
    // }

    // let display = setInterval(showTime, 5000);
}

// The above program displays the current time once every 5 seconds.

// new Date() gives the current date and time. And toLocaleTimeString() returns the current time.

// JavaScript clearInterval()

// The syntax of clearInterval() method is

{
//     clearInterval(intervalID);
// // Here, the intervalID is the return value of the setInterval() method.
}

// Use clearInterval() Method

{
    // // program to stop the setInterval() method after five times

    // let count = 0;

    // // function creation
    // let interval = setInterval(function(){

    //     // increasing the count by 1
    //     count += 1;

    //     // when count equals to 5, stop the function
    //     if(count === 5){
    //         clearInterval(interval);
    //     }

    //     // display the current time
    //     let dateTime= new Date();
    //     let time = dateTime.toLocaleTimeString();
    //     console.log(time);

    // }, 2000);

    // // the setInterval() method is used to display the current time every 2 seconds. The clearInterval() method stops the function call after 5 times.
}

// You can also pass additional arguments to the setInterval() method. The syntax is

{
    // setInterval(function, milliseconds, parameter1, ....paramenterN);
}

// When you pass additional parameters to the setInterval() method, these parameters (parameter1, parameter2, etc.) will be passed to the specified function.

{
    // // program to display a name
    // function greet(name, lastName) {
    //     console.log('Hello' + ' ' + name + ' ' + lastName);
    // }

    // // passing argument to setInterval
    // setInterval(greet, 1000, 'John', 'Doe');

    // // two parameters John and Doe are passed to the setInterval() method. These two parameters are the arguments that will be passed to the function (here,  greet() function) that is defined inside the setInterval() method.
}


// JavaScript try...catch...finally Statement

// The try, catch and finally blocks are used to handle exceptions (a type of an error).

// Types of Errors

// Syntax Error: Error in the syntax. For example, if you write consol.log('your result');, the above program throws a syntax error. The spelling of console is a mistake in the above code.

// Runtime Error: This type of error occurs during the execution of the program. For example,
// calling an invalid function or a variable.

// JavaScript try...catch Statement

{
    // // The try...catch statement is used to handle the exceptions. 
    // try {
    //     // body of try
    // } 
    // catch(error) {
    //     // body of catch  
    // }

    // // The main code is inside the try block. While executing the try block, if any error occurs, it goes to the catch block. The catch block handles the errors as per the catch statements.
}

// Display Undeclared Variable

{
    // // program to show try...catch in a program

    // const numerator= 100, denominator = 'a';

    // try {
    //     console.log(numerator/denominator);
    //     let a  = 1111;
    //     // forgot to define variable a      
    //     console.log(a);
    // }
    // catch(error) {
    //     console.log('An error caught'); 
    //     console.log('Error message: ' + error);  
    // }
}

// JavaScript try...catch...finally Statement

// You can also use the try...catch...finally statement to handle exceptions. The finally block executes both when the code runs successfully or if an error occurs.

{
    // try {
    //     // try_statements
    // } 
    // catch(error) {
    //     // catch_statements  
    // }
    // finally() {
    //     // codes that gets executed anyway
    // }
}

// try...catch...finally Example

{
    // const numerator= 100, denominator = 'a';

    // try {
    //     console.log(numerator/denominator);
    //     console.log(a);
    // }
    // catch(error) {
    //     console.log('An error caught'); 
    //     console.log('Error message: ' + error);  
    // }
    // finally {
    //     console.log('Finally will execute every time');
    // }

    // // You need to use catch or finally statement after try statement. Otherwise, the program will throw an error Uncaught SyntaxError: Missing catch or finally after try.
}

// JavaScript throw Statement

// The syntax of throw statement is

{
    // throw expression;
}

{
    // const number = 5;
    // throw number/0; // generate an exception when divided by 0
}

// JavaScript throw with try...catch

{
    // try {
    //     // body of try
    //     throw exception;
    // } 
    // catch(error) {
    //     // body of catch  
    // }
}

// try...catch...throw Example

{
    // const number = 10;
    // try {
    //     if(number > 50) {
    //         console.log('Success');
    //     }
    //     else {

    //         // user-defined throw statement
    //         throw new Error('The number is low');
    //     }

    //     // if throw executes, the below code does not execute
    //     console.log('hello');
    // }
    // catch(error) {
    //     console.log('An error caught'); 
    //     console.log('Error message: ' + error);  
    // }
}

// Rethrow an Exception

{
    // // You can also use throw statement inside the catch block to rethrow an exception.

    // const number = 5;
    // try {
    //     // user-defined throw statement
    //     throw new Error('This is the throw');

    // }
    // catch(error) {
    //     console.log('An error caught');
    //     if( number + 8 > 10) {

    //         // statements to handle exceptions
    //         console.log('Error message: ' + error); 
    //         console.log('Error resolved');
    //     }
    //     else {
    //         // cannot handle the exception
    //         // rethrow the exception
    //         throw new Error('The value is low');
    //     }
    // }
}


// JavaScript "use strict"
// 'use strict'
// In JavaScript, 'use strict'; states that the code should be executed in 'strict mode'. This makes it easier to write good and secure JS code. 

{
    // myVariable = 9;
    // console.log(myVariable);
}

// Here, myVariable is created without declaring. This works as a global variable in JavaScript. However, if you use this in strict mode, the program will throw an error. 

{
    // 'use strict';

    // // Error
    // myVariable = 9;
}

// The above code throws an error because myVariable is not declared. In strict mode, you cannot use the variable without declaring them.


// To indicate this program is in the strict mode, we have used

{
    // 'use strict';

    // // at the top of the program.

    // // You can declare the strict mode by adding 'use strict'; or "use strict"; at the beginning of a program.

    // // When you declare strict mode at the beginning of a program, it will have global scope and all the code in the program will execute in strict mode.
}

// Strict Mode in Variable

// In strict mode, using a variable without declaring it throws an error.

{
    // console.log("some code");

    // // 'use strict' is ignored
    // // must be at the top
    // "use strict";

    // x = 21; // does not throw an error
    // console.log(x);
    // // You need to declare strict mode at the beginning of the program. If you declare strict mode below some code, it won't work.
}

// Strict Mode in Function
// You can also use strict mode inside a function.

{
    // myVariable = 9;
    // console.log(myVariable); // 9

    // function hello() {

    //     // applicable only for this function
    //     'use strict';

    //     string = 'hello'; // throws an error
    // }

    // hello();
}


// If you use 'use strict'; inside a function, the code inside the function will be in strict mode.


// In the above program, 'use strict'; is used inside the hello() function. Hence, the strict mode is applicable only inside the function.

// As you can see, in the beginning of the program, myVariable is used without declaring.

// If you declare 'use strict'; at the top of the program, you cannot use a variable without declaring it inside the function as well.

{
    // // applicable to whole program
    // 'use strict';

    // function hello() {
    //     string = 'hello'; // throws an error
    // }

    // hello();

    // // Note : Strict mode doesn't apply to block statements with {} braces.
}


// Things Not Allowed in Strict Mode
// 1. Undeclared variable is not allowed.
{
    // 'use strict';
    
    // a = 'hello'; // throws an error
}

// 2. Undeclared objects are not allowed.

{
    // 'use strict';
    
    // person = {name: 'Carla', age: 25}; // throws an error
}

// 3. Deleting an object is not allowed.

{
    // 'use strict';
    
    // let person = {name: 'Carla'};
    
    // delete person; // throws an error
}

// 4. Duplicating a parameter name is not allowed.

{
    // "use strict";
    
    // function hello(p1, p1) { console.log('hello')}; // throws an error
    
    // hello();
}

// 5. Assigning to a non-writable property is not allowed.

{
    // 'use strict';
    
    // let obj1 = {};
    
    // Object.defineProperty(obj1, 'x', { value: 42, writable: false });
    
    // // assignment to a non-writable property
    // obj1.x = 9; // throws an error
}

// 6. Assigning to a getter-only property is not allowed.

{
    // 'use strict';
    
    // let obj2 = { get x() { return 17; } };
    
    // // assignment to a getter-only property
    // obj2.x = 5; // throws an error
}

// 7. Assigning to a new property on a non-extensible object is not allowed.

{
    // 'use strict';
    
    // let obj = {};
    // Object.preventExtensions(obj);
    // // Assignment to a new property on a non-extensible object
    // obj.newValue = 'new value'; // throws an error
}

// 8. Octal syntax is not allowed.

{
    // 'use strict';
    
    // let a = 010; // throws an error
}

// 9. The variable name arguments and eval are not allowed.

{
    // 'use strict';
    
    // let arguments = 'hello'; // throws an error
    
    // let eval = 44;
}

// 10. You cannot also use these reserved keywords in strict mode.

// implements interface let package private protected public static yield


// Benefits of Strict Mode

// The use of strict mode:

// helps to write a cleaner code
// changes previously accepted silent errors (bad syntax) into real errors and throws an error message
// makes it easier to write "secure" JavaScript
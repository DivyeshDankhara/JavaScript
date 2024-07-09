/*Javascript Hoisting */

// var with Hoisting
{
    // var a , b , c
    // var a;
    // var b;
    // var c;
    
    // a = 10;
    // b = 20;
    // c = 30;

    // console.log(a);
    // console.log(b);
    // console.log(c);
}

// Let with hoisting
{
    // let x , y , z
//     let x;
//     let y;
//     let z;

//     x = 10;
//     y = 20;
//     z = 30;

//     console.log(x);
//     console.log(y);
//     console.log(z);
}

// const with Hoisting
{
    // const a , b , c //Not possible Hosting
    // const x = 10
}

/*Javascript Template Literals (back-tik) */

// let i = 'skillQode'
// {
//     let subject = 'Javascript'
//     let hardness = 'Normal'

//     let String1 = "I am Learning ${subject}"

//     console.log(String1);

//     console.log(typeof String1);

//     let String2 = 'I am Learning ${subject}'

//     console.log(String2);

//     console.log(typeof String2);

//     let String3 = `I am Learning ${subject} Ans It's ${hardness}`

//     console.log(String3);

//     console.log(typeof String3);
// }

/*Javascript String Define Method */

// {
//     let String1 = "I am `${i}` Learning"
//     let String2 = "I 'am' \n Lear\tning"
//     let String3 = "I \"am\" Learning"

//     console.log(String1);
//     console.log(String2);
//     console.log(String3);
// }

// {
//     let String4 = 'I am Learning'
//     let String5 = 'I \'am\' Learning'
//     let String6 = 'I "am" Learning'

//     console.log(String4);
//     console.log(String5);
//     console.log(String6);

        // let String7 = `I \`Am ${i}\` Learning ${i}`

        // console.log(String7);
// }

// DataTypes In Javascript

/*Primitive Datatypes / immutable */

/*
String
Number
Boolean
null
undefined
bigint
Symbol
object
 */

/*non-premitive DataTypes / mutable */

/*
Array
Object
 */

// var a;
// console.log(a);

// console.log(undefined);

// let x = undefined
// let y = null == undefined

// console.log(x);

// console.log(typeof x);

// console.log(typeof y);

// console.log(y);

let x = 'number'
let z = 4
let y = 5

console.log(z + z + x + z + z + z);

console.log(x * z);

console.log(typeof NaN);

console.log(x * x);

console.log(z * z * x + z + z * z - z);

console.log(((y * z) + x + (x + (x*x))));

console.log((y - z) + y * (z + z));
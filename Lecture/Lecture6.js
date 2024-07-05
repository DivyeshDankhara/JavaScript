// Javascript Loops
// Increment , Decrement

{
    // let x = 10
    // console.log(++x);
}

{
    // let x = 10
    // console.log(--x);
}

/*
while loop
do-while loop
for loop
for-in loop
for-of loop
*/


// While loop
// while(condition){
//     statement;
//     afterThought;
// }
{
    // let Age = 0;
    // while(Age <= 18){
    //     console.log(`Now I am Minor! ${Age}`);
    //     Age++;
    // }
}


// Do-While loop
// do{
//     statement
//     afterThought
// }while(condition);
{
    // let Age = 0;
    // do{
    //     console.log(`Now I am Minor! ${Age}`);
    //     Age++;
    // }while(Age == 1)
}


// For loop
// for(initilization; condition; afterThought){
//     statement;
// }
{
    // let i = 0
    // for(i; i < 10; i++){
    //     console.log('Javascript For loop');
    // }
}


// For-in loop
{
    // let ary = [];
    // console.log(ary);
    // ary[0] = '10';
    // console.log(ary);
    // ary.shift();
    // console.log(ary);
    // ary.length = 10;
    // console.log(ary);
    // ary[5] = '10';
    // console.log(ary);

    // let Arrays = [];
    // console.log(typeof Arrays);
    // let Arrayss = new Array()
    // console.log(typeof Arrayss);

    // console.log(Arrays);
    // console.log(Arrayss);    
}

{
    // let obj ={};
    // console.log(obj);
    // obj.key1 = 'skillQode';
    // console.log(obj); 
    // console.log(obj.key1);
    // console.log(obj['key1']); 
}


// push and unshift value add in array
// pop and shift value remove in array

/* For In loop 

THe for...in statement iterates over all enumerable string properties of an object(ignoring properties keyed by symbols), including inherited enumerable properties.

*/

// for(variable in object)
// statement
{
    let obj = {
        a:10 ,
        b:20 ,
        c:30 ,
        d:[
            {

            }
        ]
    }

    for(let [key , value] in obj){
        console.log(`${key} :${obj[value]}`);
    }
}
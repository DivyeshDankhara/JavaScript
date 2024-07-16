// Array => similar data store in one variable
// [size]

// let data = [];
// let data = new Array('Hello', 'World', "Skill", "Qode");
// let data = [10,20,30,40,50];
// console.log(data);
// console.log(data[3]);
// data[3] = 100;
// console.log(data);


// property => length 
let data = [10,20,30,40,50,100,200];
console.log(data);

// console.log(Array.isArray(data));
// console.log(data.length);


// Push -> insert into last index
// data.push(60);
// data.push(70,80 );
// console.log(data);


// Pop -> remove into last position
// data.pop();
// console.log(data);


// Unshift -> insert first position
// data.unshift(100);
// data.unshift(200,300,400);
// console.log(data);


// Shift -> first position remove 
// data.shift();
// console.log(data);


// splice(start, removecount, ...add)
// data.splice(2,0,500,600,700)
// data.splice(2,2);
// console.log(data);


// let data1 = ["Divyesh", "ansh", "Arpit", "chetan"];
// data1.sort();
// console.log(data1);
// console.log(data.sort((a,b)=>a-b));
// console.log(data.slice(0,6));
// console.log(data.reverse());


// let num1 = [11, 22];
// console.log(data.concat(num1, ['a','b']));


// include => check if element is exit or not
// console.log(data.includes(50)); 
// console.log(data.includes(500)); 


const maxFun = (e) =>{
    return Math.max.apply(null, e)
}
const minFun = (e) =>{
    return Math.min.apply(null, e)
}

console.log(maxFun(data));
console.log(minFun(data));
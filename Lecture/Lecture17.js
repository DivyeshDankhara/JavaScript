// Object

// let data = new Object();
// console.log(typeof(data));

let data = {
    name: "Divyesh",
    age: 20,
    hobbies: ['Music','Dance'],
    marks: {
        maths: 25,
        sci: 28,
        eng: 16,
    },
    hello: ()=>('Hello Guys.......')
};
// console.log(data);
// console.log(data.hello());
// console.log(data.hobbies[1]);
// console.log(data.marks.sci);
// console.log(data['name']);
// console.log(data['marks']['maths']);
// console.log(data['hobbies'][0]);

// let a = "marks";
// console.log(data[a]);

// add new field
// data.new = 'howww';
// console.log(data);

// delete
// delete data.hello
// console.log(data);



// class
class JSHello{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.gender = 'Male'
    }
    sayHello(){
        return `My name is ${this.name} and my age is ${this.age}, gender is : ${this.gender}.`
    }
};

let abc = new JSHello('Divyesh Dankhara',20);
console.log(abc.sayHello());
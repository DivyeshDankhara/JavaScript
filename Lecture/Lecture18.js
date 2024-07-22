// Call method 

// let person = {
//     sayHello: function(city){
//         return `${this.name} and ${this.age} city is: ${city}`
//     }
// }

// let data = {
//     name: 'Virat',
//     age: 34
// };
// let data1 = {
//     name: 'Rohit',
//     age: 36
// };

// console.log(person.sayHello.call(data,'surat'));

// Apply 
// let person = {
//     sayHello: function(city){
//         return `${this.name} and ${this.age}, city: ${city}`
//     }
// }

// let data = {
//     name: 'Virat',
//     age: 34
// };
// let data1 = {
//     name: 'Rohit',
//     age: 36
// };

// console.log(person.sayHello.apply(data1,['Mumbai']));


// Bind 
let person = {
    name: 'Divyesh Dankhara',
    age: 36,
    sayHello: function(city){
        return `${this.name} is ${this.age}, city: ${city}`
    }
}

let data = {
    name: 'Virat',
    age: 34
};
// console.log(person.sayHello('surat'));
console.log(person.sayHello.bind(data, 'Mumbai')());
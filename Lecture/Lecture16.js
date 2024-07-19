// Map & Set Method
// Deep copy & Shallow copy


// Map => key - value
// let data = new Map();
// let data = new Map([
//     ["Hello", 100],
//     ["World", 200],
//     ["Divyesh", 300],
//     ["Dankhara", 400],
// ])

// console.log(data);
// console.log(data.size);
// data.set("Ansh", 500);
// console.log(data);
// console.log(data.get('World')); 
// // console.log(data.get('world')); //case sensative
// data.delete('World')
// console.log(data);
// console.log(data.entries());

// let txt = "";
// data.forEach((val, key) => {
//     txt += key + "---->" + val + "\n";
// })
// console.log(txt);


// Set

// let data = new Set([1,2,3,4,'hello']);

// data.add(5);
// console.log(data);
// console.log(data.size);
// console.log(data.values());
// console.log(data.entries());
// console.log(data.has('hello'));
// data.delete('hello');
// data.clear();
// console.log(data);

// let txt = "";

// data.forEach((val) => {
//     txt += "---->" + val + "\n";
// });
// console.log(txt);


// Shallow Copy
// let data = [11,22,33,44,55];

// let abc = data;

// data.pop();
// abc.push(100);
// console.log(data);
// console.log(abc);


// Deep Copy

// let data = [11,22,33,44,55];

// let abc = [...data];

// data.pop();
// abc.push(100);
// console.log(data);
// console.log(abc);
let n1 = prompt("Enter the number1 :-> ");
let n2 = prompt("Enter the number2 :-> ");
let n = prompt("1. +\n2. -\n3. *\n4. /\n 5. %");
let ot;
n = +n;

switch(n){
    case 1:
        ot = +n1 + +n2;
        console.log(`Sum of ${n1} and ${n2} is :-> ${ot}`);
        break;
    case 2:
        ot = +n1 - +n2;
        console.log(`Subtraction of ${n1} and ${n2} is :-> ${ot}`);
        break;
    case 3:
        ot = +n1 * +n2;
        console.log(`Sum of ${n1} and ${n2} is :-> ${ot}`);
        break;
    case 4:
        ot = +n1 / +n2;
        console.log(`Sum of ${n1} and ${n2} is :-> ${ot}`);
        break;
    case 5:
        ot = +n1 % +n2;
        console.log(`Sum of ${n1} and ${n2} is :-> ${ot}`);
        break;
    default:
        break;
}
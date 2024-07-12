// 2. Write a program that acts as a simple calculator performing addition, subtraction, multiplication, and division.

function calculator(value1, value2, method)
{
    let ans;
    switch (method) {

        case "+":
            ans = value1 + value2;
            break;
        case "-":
            ans = value1 - value2;
            break;
        case "/":
            ans = value1 / value2;
        break;
        case "*":
            ans = value1 * value2;
            break;
        case "%":
            ans = value1 % value2;
            break;
    }

    return ans;
}

console.log(calculator(5, 10, "+"));
console.log(calculator(15, 5, "-"));
console.log(calculator(10, 2, "/"));
console.log(calculator(10, 20, "*"));
console.log(calculator(10, 2, "%"));
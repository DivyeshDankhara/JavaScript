// 1. Write a program to convert temperatures between Celsius and Fahrenheit.

let celsiustofahrenheit = new Function("celsius", 'return ((9/5 * celsius)+32)');
console.log(celsiustofahrenheit(0)+" Fahrenheit");

let fahrenheittocelsius = new Function("fahrenheit", 'return ((fahrenheit - 32) * 9/5)');
console.log(fahrenheittocelsius(32)+" Celsius");
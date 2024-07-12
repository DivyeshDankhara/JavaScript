// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451

let number = 15438;
let r = 0;
let rev = 0;

let ans = reverse(number);
console.log(ans);

function reverse(number)
{
    while(number != 0)
    {
        r = number % 10;
        rev = rev * 10 + r;
        number = number /10;
        number = parseInt(number);
    }
     
    return rev;
}
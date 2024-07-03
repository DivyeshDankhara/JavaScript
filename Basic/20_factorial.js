let n = prompt("Enter the number you want factorial number :-> ");
n = +n;
let a = 1;

if(n == 0){
    console.log("factorial of number :-> " +n);
}else{
    for(let i = 1; i <= n; i++)
    {
        a *= i;
    }
    console.log("factorial of number :-> " +a);
}

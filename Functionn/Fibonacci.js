// 5. Write a program to print the first n terms of the Fibonacci sequence.

function fibonacci(num){
    let f = 0;
    let s = 1;
    let current = 0;

    for(let i = 1; i <= num; i++)
    {
        console.log(current);
        f = s;
        s = current;
        current = f + s;
    }
}

fibonacci(5);
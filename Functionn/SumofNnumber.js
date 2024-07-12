// 8. Write a program to find the sum of the first n natural numbers.

function sum(n)
{
    let ans = 0;

    for(let i = 1; i <= n; i++)
    {
        ans += i;
    }

    console.log(ans);
}

sum(5);
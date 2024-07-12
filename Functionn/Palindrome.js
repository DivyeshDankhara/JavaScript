// 7. Write a program to check if a string is a palindrome.

function palindrome(str)
{
    let ans = "";

    for(let i = str.length-1; i >= 0; i--)
    {
        ans += str[i];
    }
   
    if(ans == str)
    {
        console.log(`${str} is Palindrome`);
    }
    else
    {
        console.log(`${str} is not Palindrome`);
    }
}

palindrome("dev");
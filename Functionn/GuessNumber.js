// 9. Write a simple guessing game where the user has to guess a number between 1 and 10.

function random(n)
{
    ran = (Math.floor( Math.random() * 10 + 1));
    console.log("Rnadom number is :-> ",ran);
    console.log("Your Guess number is :-> ",n);

    if(ran == n)
    {
        console.log("Your Guess number is true");
    }
    else
    {
        console.log("Your Guess number is false");
    }
}

random(2);
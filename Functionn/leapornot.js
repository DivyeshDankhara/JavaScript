// 11. Write a program to check if a year is a leap year or not.

function leap(year){
    if(year%4 == 0)
    {
        console.log(`${year} is leap year`);
    }
    else if(year%100 == 0)
    {
        console.log(`${year} is leap year`);
    }
    else if(year%400 == 0)
    {
        console.log(`${year} is leap year`);
    }
    else
    {
        console.log(`${year} not a leap year`);
    }
}

leap(2004);
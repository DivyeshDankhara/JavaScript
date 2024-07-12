function voWelorconsonant(str)
{
    let vowel = ["a","e","i","o","u","A","E","I","O","U"];
    let count=0,count1=0;
    for(let divyesh of str)
    {
        if(vowel.includes(divyesh))
        {
            count++;
        }
        else
        {
            count1++;
        }
    }
    console.log("VoWel is :-> ",count);
    console.log("Consonant is :-> ",count1);
}

voWelorconsonant("Divyesh");
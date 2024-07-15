// 2. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.


function alphabetical_order(str){
    const arry = str.split("");
    let n = "";

    for(let i = 0; i < str.length; i++)
    {
        for(let j = i+1; j < str.length; j++)
        {
            if(arry[i] > arry[j])
            {
                n = arry[i];
                arry[i] = arry[j];
                arry[j] = n;
            }
        }
    }

    return arry.join("");
}

console.log(alphabetical_order("webmaster"));
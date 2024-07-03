let a = prompt("Enter string :-> ");
let b = "";

for(let i = a.length-1,j=0; i >= 0; i--,j++)
{
    b += a[i];    
}

console.log(b);
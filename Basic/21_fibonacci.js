let c = 0;
let f = 1;
let s = 0;

for(let i = 0; i < 10; i++)
{
    console.log(c);
    s = c;
    c = f + s;
    f = s;
}
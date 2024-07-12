function reverse(str){
   let len = str.length;
   let ans = "";

   for(let i = len-1; i >= 0; i--)
   {
        ans += str[i];
   }
   console.log(ans);
}

console.log();
reverse("Divyesh");
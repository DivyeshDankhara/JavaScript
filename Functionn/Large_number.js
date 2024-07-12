// 3. Write a program to find the largest of three numbers.

(function large(a, b, c){
    if(a>b && a>c){
        console.log(`${a} is large`);
    }else if(b>c && b>a){
        console.log(`${b} is large`);
    }else{
        console.log(`${c} is large`);
    }
})(10, 20 ,30);
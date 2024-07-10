// Javascript Break And Continue Statements

// Break Statement
{
    // for(i = 0; i < 10; i++){
    //     if(i == 6){
    //         break;
    //     }
    //     console.log('Break Loops');
    // }
}

// Continue Statement
{
    // for(i = 0; i < 10; i++){
    //     if(i == 6){
    //         continue;
    //     }
    //     console.log('Break Loops');
    // }
}


// Nested Loop
{
    // demo:for(i = 0; i < 10; i++){
    //     if(i == 5){
    //         break;
    //     }
    //     console.log('Main loop');
    //     { 
    //         if(i==2){ 
    //             continue; 
    //         } 
    //         console.log('Main loop') 
    //     } 
    // }
}


// CallBack Function
{
    // function sum(a , b , callback){
    //     callback();
    //     return a + b;
    // }

    // function callback(){
    //     console.log('This is Callback Function');
    // }

    // console.log(sum(20 , 30 , callback));
}

{
    // function sum(a , b){
    //     function callback(){
    //         console.log(`This is Callback Function`);
    //     }
    //     callback()
    //     return a + b
    // }

    // console.log(sum(20 , 30));
}

{
    // function sum(a , b){
    //     return(
    //         function call(){
    //             console.log(`This is Callback Function`);
    //         }
    //         callback();
    //         a + b
    //     )
    // }

    // console.log(sum(20 , 30));
}


// IIFE
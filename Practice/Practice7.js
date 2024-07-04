// Javascript for.....of Loop / forEach Loop

{
    // let Array = ['html' , 'css' , 'bootstrap' , 'sass' , 'tailwindcss' , 'javascript' , 'reactjs' , 'nextja']

    // console.log(Array[0]);

    // console.log(Array);

    // for(let items of Array){
    //     console.log(items);
    // }

    // Array.forEach((item) => console.log('forEach' , item))

    // let num = [10 , 20 , 30 , 40]

    // for(let multi of num){
    //     console.log(multi * 10);
    // }

    // num.forEach((item) => console.log(item * 20))

    // num.map((item) => console.log(item * 30))
}


//Basic Function
{
    let func1 = function greek(){
        console.log('Javascript Functions!');
    }

    console.log(func1);
    func1()
}


// Arrow Function
{
    const func1 = () => console.log('Hello Arrow Function');

    console.log(func1());
}


// Function with return keywords
{
    function profile(){
        return 'This is skillQode Institute'
    }

    console.log(profile());
}


// Function With Events

// DOM Events

// Mouse
// Keyboard
// Window

{
    function html(){
        document.getElementById('demo').innerHTML = 'Hi , How Are You!'
    }

    function css(){
        document.getElementById('demo').style.backgroundColor = 'purpule'
        document.getElementById('demo').style.color = 'white'
        document.getElementById('demo').style.textDecoration = 'underline'
    }
}
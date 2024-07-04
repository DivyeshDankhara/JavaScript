// Javascript Statements

/**
    
    if Statement
    if..else Statement
    if..else if Statement
    switch Statement
*/

// The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

// if (condition)
//     statement1
  
//   // With an else clause
//   if (condition)
//     statement1
//   else
//     statement2
  
// condition
// An expression that is considered to be either truthy or falsy.

// statement1
// Statement that is executed if condition is truthy. Can be any statement, including further nested if statements. To execute multiple statements, use a block statement ({ /* ... */ }) to group those statements. To execute no statements, use an empty statement.

// statement2
// Statement that is executed if condition is falsy and the else clause exists. Can be any statement, including block statements and further nested if statements.

// IceCreame Production

let RowMaterial = 'Milk'
let Storage = false
let Production = true
let Blending = true
let Pasteurization = true
let Addingflavor = 'chocolate'
let Freezing = true

// if(RowMaterial == 'Milk'){
//     console.log('IceCreame Ready For Production !');
// }else{
//     console.log('Production Off');
// }

// if(RowMaterial == 'Milk'){
//     console.log('IceCreame Ready For Production !');
// }else if(Production == true){
//     console.log('IceCream Production has been started');
// }else if(Blending == true){
//     console.log('IceCreame Production blending mode has been started');
// }else if(Pasteurization == true){
//     console.log('IceCreame Production Pasturization mode has been started');
// }else if(Addingflavor == 'Mango'){
//     console.log('IceCreame Production Mango Flavor has been started');
// }else if(Freezing == true){
//     console.log('IceCreame Production Freezing mode has been started');
// }

// if(RowMaterial == 'Milk'){
//     console.log('IceCreame Ready For Production');
//     if(Production == true){
//         console.log('IceCreame Production has been started');
//         if(Blending == true){
//             console.log('IceCreame Production blending mode has been started');
//             if(Pasteurization == true){
//                 console.log('IceCreame Production Pasturization mode has been started');
//                 if(Addingflavor == 'chocolate'){
//                     console.log('IceCreame Production chocolate Flavor has been started');
//                     if(Freezing == true){
//                         console.log('IceCreame Production Freezing mode has been started');
//                     }
//                 }
//             }
//         }
//     }
// }


// Switch Case Statement

// The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.

// switch (expression) {
//     case caseExpression1:
//       statements
//     case caseExpression2:
//       statements
//     // …
//     case caseExpressionN:
//       statements
//     default:
//       statements
//   }
  

// let subject = 'science'

// switch(subject){
//     case 'physics': console.log('physics books');
//     break;
//     case 'maths' : console.log('maths books');
//     break;
//     case 'chemistry' : console.log('chemistry books');
//     break;
//     case 'history' : console.log('history books');
//     break;
//     case 'english' : console.log('english books');
//     default: console.log('No match books');
// }


let subject = 'physics'

switch(subject){
    case 'physics':() =>{
        console.log('physics books');
    }
    case 'maths' :() =>{
        console.log('maths books');
    }
    case 'chemistry' :() =>{
        console.log('maths chemistry');
    }
    case 'history' :() =>{
        console.log('maths history');
    }
    case 'english' :() =>{
        console.log('maths english');
    }
    default:() =>{
        console.log('No match books');
    }
}
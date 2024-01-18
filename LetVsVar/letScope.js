// scope of let is lexical scope(Block scope)
// {
//     let x = 10;
//     console.log(x);
// }

// console.log(x) // it will give error as x is defined in a scope


let x = 20;

function fun() {
    // console.log(x); // It will give error as x is not defined because let is block scoped
    let x = 10;
    console.log(x);
}

fun();
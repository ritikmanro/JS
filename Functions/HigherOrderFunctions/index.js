// Functions which are passed as argument in another function ==> Higher order function
// Function returning from a function
function genFun() {
    function hello() {
        console.log("Hi, using higher order function");
    }

    return hello;
}

let x = genFun();
x();








//Function passed in argument
function printFun(f) {
    // console.log(f);
    console.log(f.toString());
    f(); // Calling the function received as an argument
}

function hello() {
    console.log("Hello World")
}

printFun(hello); //passing hello function as argument to printFun
// printFun(hello()); //passing hello function as argument to printFun
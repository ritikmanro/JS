//Function is hoisted at the top and the variables only LHS is hoisted and not the RHS
fun();

console.log(x);
var x = 10;
console.log(x)

function fun() {
    console.log("Having fun with JS");
}

function f() {
    console.log("I am another fun");
}

f()
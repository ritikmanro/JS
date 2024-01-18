// functions and vars gets hoist
hello();
console.log(x)

var x = 10;
console.log(x);

function hello() {
    console.log("hello");
}
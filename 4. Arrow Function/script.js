let fun = () => {
    console.log("Fun");
}

fun();

let add = (a, b) => { // It can have multiple statements
    return a + b;
}

// let ans = add(1, 2);
// console.log(ans);

console.log(add(1, 2));

let sub = (a, b) => a - b; // It cannot have multiple statements and can write it without writing return
console.log(sub(5, 1));
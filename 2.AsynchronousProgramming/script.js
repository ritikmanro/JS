setTimeout(function () { // It is a asynchronous function
    console.log("hello World");
}, 2000)

console.log("After set timeout");
let x = 10;
console.log(x);


function delayASec() { // It is a synchronous function
    let t = new Date().getTime();
    while (new Date().getTime() - t < 1000) {

    }
}

function delayNSec(n) {
    for (let i = 0; i < n; i++) {
        delayASec()
    }
}
// delayASec();
// delayASec();
delayNSec(3);

console.log("Hi, after delay") //Will print after a delay
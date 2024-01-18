// let id = setInterval(function () { // It is async function as well
//     console.log("Hello");
// }, 2000)

// setTimeout(function () {
//     clearInterval(id)
// }, 5000);


let id = setInterval(function () { // It is async function as well
    console.log("Hello");
}, 1000, setTimeout(function () {
    clearInterval(id)
}, 5000));

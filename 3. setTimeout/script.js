let id = setTimeout(function () {
    console.log("Hello");
}, 5000)

console.log(id);

setTimeout(function () { //clear timeout from the web API
    clearTimeout(id)
}, 3000)


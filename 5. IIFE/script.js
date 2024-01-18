//Used to hide certain properties in the code to make it not accessible and still be used.
(function () {
    console.log("Hello world");
})();

(() => {
    console.log("Arrow Function");
})();

(function (a, b) {
    console.log("sum", a + b);
})(10, 20)
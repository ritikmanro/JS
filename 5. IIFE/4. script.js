// IIFE can be used for minification
// function operations(a, b) {
//     console.log("Sum: ", a + b);
//     console.log("Sub: ", a - b);
//     console.log("Product: ", a * b);
//     console.log("Sqrt: ", Math.sqrt(a), ",", Math.sqrt(b));
//     console.log("Sin: ", Math.sin(a), ",", Math.sin(b));
// }

// operations(20, 10)

//Now Reducing the size of the file

((a, b, cl, msq, ms) => {
    cl("Sum: ", a + b);
    cl("Sub: ", a - b);
    cl("Product: ", a * b);
    cl("Sqrt: ", msq(a), ",", msq(b));
    cl("Sin: ", ms(a), ",", ms(b));
})(20, 10, console.log, Math.sqrt, Math.sin);

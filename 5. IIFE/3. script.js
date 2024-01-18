// Return multiple values from IIFEs
let obj = (function () {
    let age = 20;
    console.log("Hello World");

    function drivingEligible() {
        (age >= 18) ? console.log("Drive Eligible") : console.log("Drive not eligible");
    }


    function drinkingEligible() {
        (age >= 21) ? console.log("Drinking Eligible") : console.log("Drinking not eligible");
    }
    return { drivingEligible, drinkingEligible };
})()

console.log(obj);
obj.drivingEligible()
obj.drinkingEligible()
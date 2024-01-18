function carMaker(type){
    let counter = 0;

    return function (name, model) {
        counter++;

        this.name = name;
        this.model = model;
        console.log(`count + ${type}`, counter);
    }
}

let car = new carMaker("Car");
let car_A = new car("Audi", 2021);
let car_B = new car("BMW", 2020);

console.log(car_A);
console.log(car_B);


let Rickshaw = new carMaker("Rickshaw");
let rick_A = new Rickshaw("Bajaj", 2022);

console.log(rick_A);
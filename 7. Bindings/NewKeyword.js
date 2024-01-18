function car(name,price) {
    this.name = name;
    this.price = price;
}

let x = new car("BMW", 100);
let y = new car("AUDI", 200);

console.log(x);
console.log(y);
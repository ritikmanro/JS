class Person{
    constructor(name, age, city, income){
        this.name = name;
        this.age = age;
        this.city = city;
        this.taxLagega = function () {
            return income > 10? "Tax Lagega": "tax nahi lagega"
        }
    }
}

let Check = new Person("Ritik", 22, "Delhi", 100);
console.log(Check);

let secondCheck = new Person("Pankaj", 21,"Delhi", 0);
console.log(secondCheck);

console.log(secondCheck.__proto__);
console.log(Person.__proto__);
console.log(typeof Person);
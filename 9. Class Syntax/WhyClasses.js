let parents = {
    money: 100,
    house: true,
    car: "BMW",
    bike: "harley",
    codingSkills: "C++"
}

let ritik = Object.create(parents);
let junior = Object.create(ritik); // creating junior as well

console.log(ritik.house);
console.log(ritik.money);
// console.log(ritik.codingSkills); // It will give parent's codingSkills

ritik.codingSkills = "Web"

console.log(ritik.codingSkills); // It will give my coding Skill
console.log(ritik.__proto__); // To print proto  

console.log(junior.car);
console.log(junior.__proto__.__proto__.__proto__.__proto__);
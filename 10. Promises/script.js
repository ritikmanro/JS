let gf = "shyamlal";

let p = new Promise((resolve,reject) => {
    if(gf != "shyamlal"){
        return reject("Iphone nhi dunga")
    }

    setTimeout(() => {
        resolve("Iphone de dunga");
    }, 3000)
})

//syntax : 
//p.then(resolve, reject)
//p.then(resolve).catch(reject)

p.then((msg) => {
    console.log(msg);
    return "charger bhi lelo";
})
.then((secondMsg) => {
    console.log(secondMsg);
    return "Cover bhi lelo";
})
.then((thirdMsg) => {
    console.log(thirdMsg)
})
.catch((errorMsg) => {
    console.log(errorMsg);
})
.finally(()=> {
    console.log("Sara kam khtm");
})
console.log(10+20);
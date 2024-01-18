let obj = {
    a: "Hello",
    b: 10,
    c: true
}

console.log(obj.a)
console.log(obj.b)
console.log(obj.c)

//Can access object this way as well
console.log(obj["a"])
console.log(obj["b"])
console.log(obj["c"])



let obj1 = {
    "Coding Blocks": "C++, Java, Python",
    "a": true,
    "": "Empty String",
    " ": "Space"
}

console.log(obj1["Coding Blocks"])
// console.log(obj1.Coding Blocks) // will not work this way
console.log(obj1[""])
console.log(obj1[" "])


//For In Loop -->  TO loop over keys
for (i in obj) {
    console.log("For in", i + " " + obj[i])
}

// Arrays: Heterogeneous
let arr = ["hello", 1, 2, true]

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])

for (let i = 0; i < arr.length; i++) {
    console.log("Normal Loop", arr[i])
}

//For of loop --> to iterate over array
for (let i of arr) {
    console.log("For of", i)
}

//For Each Loop --> Over Arrays

//Insert and Delete in Array 
arr.push("Element")
console.log("push", arr)

arr.pop('Element')
console.log("pop", arr)

arr.unshift(1) //insert in the beginnning
console.log("unshift", arr)

arr.shift() //remove in the beginnning
console.log("shift", arr)

arr[10] = "Chef";
console.log(arr)
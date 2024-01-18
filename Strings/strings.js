let str = "Hello World learning strings!"

let newStr = "";
for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    newStr += str[i] + "-"
}

console.log(newStr)

console.log(str.indexOf("learning")) // it gives the index of string
console.log(str.indexOf("learnings")) //if index not exists then it returns -1


let newArr = str.split(" ")
console.log(newArr)
console.log(newArr.pop())
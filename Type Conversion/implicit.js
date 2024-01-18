// Comparision Operator
// 1) Loose Equality
// 2) Strict Equality

console.log("'1' == 1 :", "1" == 1)  // String Converted to integer
console.log("'1' === 1 :", "1" === 1) // False

console.log("\\t == 0 :", '\t' == 0); //return true (\\t, '\'  was added as escape character)
console.log("\\n == 0 :", '\n' == 0); //return true (\\t, '\'  was added as escape character)
console.log("\\t == \\n :", '\t' == '\n'); //returns false (\\t, '\'  was added as escape character)

console.log('[] == 0 :', [] == 0) // returns true
console.log('"" == 0 :', "" == 0) // returns true
console.log('"" == [] :', "" == []) // returns true


console.log('[1,2,3] == [1,2,3]', [1, 2, 3] == [1, 2, 3]) // returns true

let arr = [1, 2, 3];
let x = arr;
console.log("x == arr", x == arr) // returns true

console.log("+[]", +[]) // Converts the array to 0
console.log("+[[[[]]]]", +[[[[]]]]) // Converts the array to 0
console.log("+[1]", +[1]) // Converts the array to 0


console.log("3 + '3'", 3 + '3')
console.log("'3' + 3", '3' + 3)
console.log("'3' + 3", 3 + + '3')
console.log(0.1 + 0.2)
console.log(0.3 - 0.1)
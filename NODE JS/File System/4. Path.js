const path = require("path");

let outerPath = "c:/CB/";
let innerPath = "/JS/index.js";
//When we want to join two paths, we use path module
// /a, /b --> /a/b
// /a, b --> /a/b
// /a/, /b --> /a/b

console.log(path.join(outerPath, innerPath));
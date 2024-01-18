const fs = require("fs")

fs.readFile("./movies.json",
// {
//     encoding: "utf-8"
// },
  (err, data) => {
    if(err){
        console.error(err)
    }

    // console.log("read file successful", JSON.parse(data));
    console.log("read file successful", data.toString());
})
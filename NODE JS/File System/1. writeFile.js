const fs = require("fs");

let newMovies = {
    "avengers": "spiderman",
    "spiderman": "avengers",
    "Dragon": "Marvel",
    "marvel": "dragon"
}

console.log("JSON", JSON.stringify(newMovies));

fs.writeFile('movies.json', JSON.stringify(newMovies), (err) => {
    if(err){
        return console.error(err)
    }

    console.log("Movies written successfully");
})
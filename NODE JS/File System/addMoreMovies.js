const fs = require("fs")

const movies = {
    "hulk": "sheHulk",
    "Ironman": "ironMan"
}
    fs.readFile("movies.json", //this is asynchronous function
    {
        encoding: 'utf-8'
    },
    (err, data) => {
        data = JSON.parse(data);
        data = {
            ...data,
            ...movies
        }
        console.log(data);

        fs.writeFile("movies.json", JSON.stringify(data), (err) => {
            if (err) {
                return console.error(err)
            }

            console.log("sb done");
        })
    }
)
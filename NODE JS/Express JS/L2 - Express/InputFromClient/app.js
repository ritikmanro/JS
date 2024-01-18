const express = require("express")
const app = express();
const port = 4444;

app.get('/hi/:name/:city', (req,res) => {
    res.send(`Hello ${req.params.name} from ${req.params.city}`)
})
app.get('/bye', (req,res) => {
    console.log(req.query)
    const {name, city} = req.query
    res.send(`bye ${name}, ${city}`)
})

app.listen(port, ()=> {
    console.log("LocalHost started at port", port);
})
const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello")
})

app.get('/greetings', (req, res) => {
    res.send("Good Morning")
})

app.listen(port, () => {
    console.log("http://localhost:", port);
});
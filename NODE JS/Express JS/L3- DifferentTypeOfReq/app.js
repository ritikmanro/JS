const path = require('path')
const express = require('express')
const app = express()
const port = 4444;

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
const todos = [];

app.get('/todos', (req, res)=> {
    res.send(todos)
})

app.post('/todos', (req, res)=> {
    console.log(req.body);
    let {task} = req.body;
    todos.push(task)
    res.send("Hello from todos post")
})

app.listen(port, () => {
    console.log("Server started on port", port);
})
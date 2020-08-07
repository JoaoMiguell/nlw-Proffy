const proffys = [
    { 
        name : "Diego Fernandes",
        avatar : "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp : "999999999",
        bio : "Entusiasta das melhores tecnologias de química avançada.<br> <br>Apaixonado por explodir coisas em laboratório e por mudara vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject : "Química",
        cost : "20",
        weekday : [],
        time_from : [],
        time_to : []}
]

const express = require('express')
const server = express()

server.use(express.static("public"))

.get("/", (req, res) => {
    return res.sendfile(__dirname + "/views/index.html")
})

.get("/study", (req, res) => {
    return res.sendfile(__dirname + "/views/study.html")
})

.get("/give-classes", (req, res) => {
    return res.sendfile(__dirname + "/views/give-classes.html")
})

.listen(5500)

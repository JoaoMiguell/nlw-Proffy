// dados

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
        time_to : []
    },
    { 
        name : "Daniele evangelista",
        avatar : "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp : "999999999",
        bio : "Entusiasta das melhores tecnologias de química avançada.<br> <br>Apaixonado por explodir coisas em laboratório e por mudara vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject : "Química",
        cost : "20",
        weekday : [1],
        time_from : [],
        time_to : []
    },
    { 
        name : "Mayk Brito",
        avatar : "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp : "999999999",
        bio : "Entusiasta das melhores tecnologias de química avançada.<br> <br>Apaixonado por explodir coisas em laboratório e por mudara vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject : "Química",
        cost : "20",
        weekday : [1],
        time_from : [],
        time_to : []
    }
    
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy (req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays})
}

function pageGiveClasses (req, res) {
    const data = req.query
    //se tiver dados
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        //adicionar dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    //se nao
    //nao adiciona pois nao tem nada

    return res.render("give-classes.html", {subjects, weekdays})
}

//servidor
const express = require('express')
const server = express()

//configurar nunjucks(template-engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e configuraçao do servidor
server
//configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))
//rotas da aplicaçao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)

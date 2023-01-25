const express = require('express')
const config = require('./config/configuration.js')
const setViewEngine = require('./config/viewEngineConfig.js')
const router = require('./routes.js')

const app = express()

setViewEngine(app)

app.use(express.static('src/public'))
app.use(router)



app.get("/", (req,res) => {
    res.render("home")
})

app.get("/add-breed", (req,res) => {
    res.render("add2", {layout: false})
})

app.listen(config.PORT, () => console.log(`Server is listening on Port ${config.PORT}`))
const express = require('express')
const config = require('./config/configuration.js')

const app = express()
app.get("/", (req,res) => {
    res.send("Hello")
})

app.listen(config.PORT, () => console.log(`Server is listening on Port ${config.PORT}`))
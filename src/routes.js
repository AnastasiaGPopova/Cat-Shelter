const express = require('express')
const Router = express.Router
const router = Router()

const homeController = require('./controllers/homeController.js')

router.get('/', homeController.getHomePage)

module.exports = router
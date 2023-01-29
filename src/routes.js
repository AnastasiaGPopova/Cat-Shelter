const express = require('express')
const Router = express.Router
const router = Router()

const homeController = require('./controllers/homeController.js')
const catController = require('./controllers/catController.js')


router.get('/', homeController.getHomePage)
router.get('/edit/:catId', catController.getDetailedCat)



module.exports = router
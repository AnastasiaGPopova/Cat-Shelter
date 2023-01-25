const controller = require('../modells/Cat.js')
//const catsDB = await controller.catController.readCats()


exports.getHomePage = async (req, res) => {
    const catsDB = await controller.catController.readCats()
    
    res.render('home', {catsDB : cats})
}


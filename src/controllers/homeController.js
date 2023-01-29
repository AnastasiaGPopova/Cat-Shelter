const Cat = require('../modells/Cat.js')
//const catsDB = await controller.catController.readCats()


exports.getHomePage = async (req, res) => {
    const cats = await Cat.find().lean()
    res.render('home', {cats})

}


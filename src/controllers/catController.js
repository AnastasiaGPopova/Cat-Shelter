const Cat = require("../modells/Cat")

exports.getDetailedCat = async (req,res) => {
    console.log(req.params.catId)
    const currentCat = await Cat.findById(req.params.catId)
    res.render('editCat')
}
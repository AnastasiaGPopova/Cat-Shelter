const Cat = require("../modells/Cat")

exports.getDetailedCat = async (req,res) => {
    console.log(req.params.catId)
    const currentCat = await Cat.findById(req.params.catId).lean()
    res.render('editCat', {currentCat})
}

exports.addNewCat = (req,res) => {
    res.render('addCat')
}

exports.editCurrentCat = async (req,res) => {
    const {name, description, imageUrl, breed} = req.body
    //let currentCat = await Cat.findById(req.params.catId)
    await Cat.findOneAndUpdate({_id: req.params.catId}, name, req.body)

    res.redirect(`/edit/${req.params.catId}`)

}
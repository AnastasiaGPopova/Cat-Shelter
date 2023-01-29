const Cat = require("../modells/Cat")

exports.getDetailedCat = async (req,res) => {
    console.log(req.params.catId)
    const currentCat = await Cat.findById(req.params.catId).lean()
    res.render('editCat', {currentCat})
}

exports.addNewCatPage = (req,res) => {
    res.render('addCat')
}

exports.editCurrentCat = async (req,res) => {
    const {name, description, image, breed} = req.body
    console.log(req.body)
    const filter = {_id: req.params.catId}
    const update = {name, description, imageUrl: image, breed}
    console.log(filter)
    console.log(update)
    //let currentCat = await Cat.findById(req.params.catId)
    await Cat.findOneAndUpdate(filter, update)

    //res.redirect(`/add-cat`)
 
}

exports.addingNewCat = async (req, res) => {
    const {name, description, image, breed} = req.body
    const newCat = new Cat({name, description, imageUrl: image, age, breed} )
    console.log(req.body)
    await newCat.save()
    res.redirect('/')
}
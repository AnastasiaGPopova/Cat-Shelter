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
    const {name, description, imageUrl, breed} = req.body

    const filter = {_id: req.params.catId}
    const update = {name, description, imageUrl, breed}
    console.log(filter)
    console.log(update)
    //let currentCat = await Cat.findById(req.params.catId)
    await Cat.findOneAndUpdate(filter, update)

    //res.redirect(`/add-cat`)
 
}

exports.addingNewCat = async (req, res) => {
    const {name, description, imageUrl, breed} = req.body

    const newCat = new Cat({
        name,
        breed,
        description,
        imageUrl
    })
    await newCat.save()
    res.redirect('/')
}
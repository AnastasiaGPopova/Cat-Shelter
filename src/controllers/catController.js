const Cat = require("../modells/Cat")
const Breed = require("../modells/Breed")

exports.getDetailedCat = async (req,res) => {
    console.log(req.params.catId)
    const currentCat = await Cat.findById(req.params.catId).lean()
    const breeds = await Breed.find().lean()
    res.render('editCat', {currentCat, breeds})
}

exports.addNewCatPage = async (req,res) => {
    const allBreeds = await Breed.find().lean()
    res.render('addCat', {allBreeds})
}

exports.editCurrentCat = async (req,res) => {
    const {name, description, imageUrl, breed} = req.body

    const filter = {_id: req.params.catId}
    const update = {name, description, imageUrl, breed}
    console.log(filter)
    console.log(update)
    //let currentCat = await Cat.findById(req.params.catId)
    await Cat.findOneAndUpdate(filter, update)

    res.redirect(`/`)
 
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
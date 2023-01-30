const Breed = require('../modells/Breed.js')

exports.getAddBreedPage = (req,res) => {
    res.render('addBreed')
}

exports.addNewBreed = async (req,res) => {
    const breed = req.body.breed
    const newBreed = new Breed({breed})

    await newBreed.save()
    res.redirect('/')
}
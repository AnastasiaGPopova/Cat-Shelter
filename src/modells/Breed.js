const mongoose = require('mongoose')

const breedShema = new mongoose.Schema({
    breed: String,
})

const Breed = mongoose.model('Breed', breedShema)
module.exports = Breed
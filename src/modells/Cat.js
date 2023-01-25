const mongoose = require('mongoose')

const catShema = new mongoose.Schema({
    name: String,
    breed: String,
    description: String,
    age: Number
})

const Cat = mongoose.model('Cat', catShema)

async function readCats(){
    return await Cat.find()
}

async function saveCat(name, breed, description, age){
    const cat = new Cat({
        name,
        breed,
        description,
        age
    })
    await cat.save()
}

exports.catController = {
    readCats,
    saveCat
}

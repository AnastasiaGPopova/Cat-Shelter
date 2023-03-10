const mongoose = require('mongoose')

const catShema = new mongoose.Schema({
    name: String,
    breed: String,
    description: String,
    imageUrl: String
})

const Cat = mongoose.model('Cat', catShema)
module.exports = Cat

// async function readCats(){
//     return await Cat.find()
// }

// async function saveCat(name, breed, description, age, imageUrl){
//     const cat = new Cat({
//         name,
//         breed,
//         description,
//         age,
//         imageUrl
//     })
//     await cat.save()
// }

// exports.catController = {
//     readCats,
//     saveCat
// }

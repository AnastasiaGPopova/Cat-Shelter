const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:27017/catShelter')
    console.log(`Database connected`)

    const catShema = new mongoose.Schema({
        name: String,
        breed: String,
        description: String,
        age: Number
    })

    const Cat = mongoose.model('Cat', catShema)
}
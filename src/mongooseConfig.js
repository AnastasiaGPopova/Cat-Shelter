const mongoose = require('mongoose')

async function main(){
    mongoose.set('strictQuery', false)
    await mongoose.connect('mongodb://127.0.0.1:27017/catShalter')
    console.log(`Database connected`)
}

// async function readCats(){
//     const cats = await Cat.find()
// }

// async function saveCat(name, breed, description, age){
//     const cat = new Cat({
//         name,
//         breed,
//         description,
//         age
//     })
//     await cat.save()
// }


module.exports = main

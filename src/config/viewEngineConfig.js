const handlebars = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


function setViewEngine(app){
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))

// app.engine('handlebars', exphbs({
//     defaultLayout: 'main',
//     // ...implement newly added insecure prototype access
//     handlebars: allowInsecurePrototypeAccess(Handlebars)
//     })
// );

app.set('view engine', 'hbs')
app.set('views', './src/views')
}

module.exports = setViewEngine
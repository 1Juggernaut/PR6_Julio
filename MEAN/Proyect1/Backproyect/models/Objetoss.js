const mongoose = require('mongoose')

const personajeeschema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    urlImagen: {
        type: String,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('object', personajeeschema)        //Tener en cuenta que el nombre se añade una "s" por defecto al final, añadiendo un plural al singural.

const mongoose2 = require('mongoose')

const productosschema = mongoose2.Schema({
    nProduct: {
        type: String,
        required: true
    },
    Urlimagen: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    alto: {
        type: String,
        required: true
    },
    ancho: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose2.model('coreproducto', productosschema)

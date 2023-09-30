const mongoose1 = require('mongoose')

const personitaschema = mongoose1.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose1.model('lapice', personitaschema)

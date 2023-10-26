const mongoose1 = require('mongoose')

const clienteschema = mongoose1.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    direccion_correo: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    numero_tel: {
        type: String,
        required: true
    },
    pais_tel: {
        type: String,
        required: true
    }
}
    ,
    {
        versionKey: false,
        timestamps: true
    })

module.exports = mongoose1.model('usuario', clienteschema)

require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken')
const Usuario = require('../models/Clientes')



exports.generarToken = async (req, res) => {
    const { direccion_correo, password } = req.body

    const usuario = await Usuario.findOne({ direccion_correo: direccion_correo })

    if (!usuario) {
        return res.status(401).json({ msg: 'El correo es invalido' })
    }

    if (usuario.password !== password) {
        return res.status(401).json({ msg: 'La contraseña es invalida' })
    }

    const payload = {
        id: usuario._id,
        nombre: usuario.nombre,
        apellido: usuario.apellido
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
    return res.status(202).json({ token: token })
}

exports.desencriptarToken = (req, res) => {
    const token = req.body.tokenUser //Obtención token del body para desecnriptar
    jwt.verify(token, process.env.JWT_WEB_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).json({ mensaje: 'Token invalido' })
        }
        //el payload se decodificará en la variable payload
        res.status(200).json({ decodedPayload: decoded })
    })
}

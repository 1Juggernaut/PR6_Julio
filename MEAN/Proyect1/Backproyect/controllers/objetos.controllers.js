const Objetoss = require('../models/Objetoss')


exports.crearobjeto = async (req, res) => {
    // console.log(req.body)

    try {
        let objetomodel
        objetomodel = new Objetoss(req.body)
        await objetomodel.save()
        res.send(objetomodel)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador.')
    }
}

exports.obtenerpersonajes = async (req, res) => {
    try {
        const objetosdata = await Objetoss.find()
        res.json(objetosdata)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador.')
    }
}

exports.actualizarobjeto = (req, res) => {
    res.send('Actualizando personaje')
}

exports.eliminarpersonaje = (req, res) => {
    res.send('Eliminando Personaje')
}

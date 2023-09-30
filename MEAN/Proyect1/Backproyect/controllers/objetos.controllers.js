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

exports.obtenerTodoslospersonajes = async (req, res) => {
    try {
        const objetosdata = await Objetoss.find()
        res.json(objetosdata)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador.')
    }
}

exports.obtenerUnSolopersonaje = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const objetodata = await Objetoss.findById(req.params.id)
            console.log('file: objetos.controllers.js:30 => objetodata:', objetodata)
            if (!objetodata) {
                res.status(404).send('Personaje no encontrado')
            } else {
                res.json(objetodata)
            }
        } else {
            // status(418) es una respiuesta comica del error 400 "No puedo preparar cafe porque soy una tetera" "I´m a teapot"
            res.status(400).send('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador.')
    }
}

exports.actualizarobjeto = async (req, res) => {
    try {
        /* 
        {
            "nombre": "Prueba",
            "edad" : 45 ,
            "urlImagen" : "prueba.jpg"
        }
        let nombresusuario = req.body.nombre
        */
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const objetodata = await Objetoss.findById(req.params.id)
            if (!objetodata) {
                res.status(404).send('Personaje no encontrado')
            } else {
                const { nombre, edad, urlImagen } = req.body
                objetodata.nombre = nombre
                objetodata.edad = edad
                objetodata.urlImagen = urlImagen
                let documentoActualizado = await Objetoss.findOneAndUpdate({ _id: req.params.id }, objetodata, { new: true })
                res.json(documentoActualizado)
                // res.json(objetodata)
            }
        } else {
            res.status(400).send('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador.')
    }
}

exports.eliminarpersonaje = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const objetodata = await Objetoss.findById(req.params.id)
            if (!objetodata) {
                res.status(404).send('El id proporcionado no se encuentra.')
            } else {
                await Objetoss.findOneAndRemove({ _id: req.params.id })
                // se puede hacer con varios identificadores, no solo con id, modificando la llave, y su valor 
                res.send("Personaje eliminado")
                console.log("exito :)");
            }
        } else {
            res.status(400).send('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador.')
    }
}

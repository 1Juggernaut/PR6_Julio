const Personaje = require('../models/Personaje')




// METODO POST
exports.creacionpersonita = async (req, res) => {
    try {
        const busquedapersonita = await Personaje.findOne({ "cedula": req.body.cedula }).exec()
        if (busquedapersonita != null) {
            console.log('ERROR DATOS EXISTENTES')
            console.log(busquedapersonita)
            res.status(503).send('Los datos ingresados ya estan creados, se creativo :).')
            return
        }
        let personitamodel = new Personaje(req.body)
        await personitamodel.save()
        res.send(personitamodel)
        console.log('PERSONITA CREADO CON EXITO :)');
        console.log(personitamodel)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... Ocurrió un error, avisa al Admin ctm.')
    }
}

// METODO GET 

exports.mostrarPersonitass = async (req, res) => {
    try {
        const Personajedata = await Personaje.find()
        res.json(Personajedata)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... Ocurrió un error, avisa al Admin ctm.')
    }
}

// METODO GET PERO SOLO UN OBJETO 

exports.mostarunasolapersonita = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const persondata = await Personaje.findById(req.params.id)
            console.log('file: Lucho.controllers.js:46 => persondata:', persondata)
            if (!persondata) {
                res.status(404).send('Personaje no encontrado')
            } else {
                res.json(persondata)
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

// METODO DELETE 
exports.borrarpersonita = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const personitadata = await Personaje
            if (!personitadata) {
                res.status(404).send('El Id proporcionado no se encuentra')
            } else {
                await Personaje.findOneAndRemove({ _id: req.params.id })
                // se puede hacer con varios identifiadores, no solo con el id o su valor
                res.send('Personaje eliminado')
                console.log('Exitoso :)')
            }
        } else {
            res.status(400).send('El id proporcionado no existe o no es correcto')
        }

    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador.')
    }
}

// METODO PUT 

exports.actualizarpersonta = async (req, res) => {
    try {
        /* 
        {
            "nombre": "Pepito",
            "apellido" : "Perez" ,
            "cedula" : "1476521"
        }
        let nombresusuario = req.body.nombre
        */
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            let personitadata = await Personaje.FindById(req.params.id)
            if (!personitadata) {
                res.status(404).send('Personita no encontrada')
            } else {
                const { nombre, apellido, cedula } = req.body
                personitadata.nombre = nombre
                personitadata.apellido = apellido
                personitadata.cedula = cedula
                let documentoActualizado = await Personaje.findOneAndUpdate({ _id: req.params.id }, personitadata, { new: true })
                res.json(documentoActualizado)
            }
        } else {
            res.status(400).send('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups... ocurrió algo en el proceso, comuníquese con el administrador.')
    }
}

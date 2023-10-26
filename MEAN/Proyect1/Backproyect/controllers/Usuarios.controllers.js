const Personaje = require('../models/Clientes')




// METODO POST
exports.creacionpersonita = async (req, res) => {
    try {
        const busquedapersonita = await Personaje.findOne({ "nombre": req.body.nombre }).exec()


        if (busquedapersonita != null) {
            console.log('ERROR DATOS EXISTENTES')
            console.log(busquedapersonita)
            res.status(503).json('Los datos ingresados ya estan creados, se creativo :).')
            return
        }
        let personitamodel = new Personaje(req.body)
        await personitamodel.save()
        res.json(personitamodel)
        console.log('PERSONITA CREADO CON EXITO :)');
        console.log(personitamodel)
    } catch (error) {
        console.log(error)
        res.status(502).json('Ups... Ocurrió un error, avisa al Admin ctm.')
    }
}

// METODO GET 

exports.mostrarPersonitass = async (req, res) => {
    try {
        const Personajedata = await Personaje.find()
        res.json(Personajedata)
    } catch (error) {
        console.log(error)
        res.status(502).json('Ups... Ocurrió un error, avisa al Admin ctm.')
    }
}

// METODO GET PERO SOLO UN OBJETO 

exports.mostarunasolapersonita = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const persondata = await Personaje.findById(req.params.id)
            console.log(persondata)
            if (!persondata) {
                res.status(404).json('Personaje no encontrado')
            } else {
                res.json(persondata)
            }
        } else {
            // status(418) es una respiuesta comica del error 400 "No puedo preparar cafe porque soy una tetera" "I´m a teapot"
            res.status(400).json('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).json('Ups... ocurrió algo en el proceso, comuníquese con el administrador.')
    }
}

// METODO DELETE 
exports.borrarpersonita = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const personitadata = await Personaje
            if (!personitadata) {
                res.status(404).json('El Id proporcionado no se encuentra')
            } else {
                await Personaje.findOneAndRemove({ _id: req.params.id })
                // se puede hacer con varios identifiadores, no solo con el id o su valor
                res.json('Personaje eliminado')
                console.log('Exitoso :)')
            }
        } else {
            res.status(400).json('El id proporcionado no existe o no es correcto')
        }

    } catch (error) {
        console.log(error)
        res.status(502).json('Ups... ocurrió algo en el proceso, comuníquese con el administrador.')
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
                res.status(404).json('Personita no encontrada')
            } else {
                const { nombre, apellido, direccion_correo, usuario, password, numero_tel, pais_tel } = req.body
                personitadata.nombre = nombre
                personitadata.apellido = apellido
                personitadata.direccion_correo = direccion_correo
                personitadata.usuario = usuario
                personitadata.password = password
                personitadata.numero_tel = numero_tel
                personitadata.pais_tel = pais_tel
                let documentoActualizado = await Personaje.findOneAndUpdate({ _id: req.params.id }, personitadata, { new: true })
                res.json(documentoActualizado)
            }
        } else {
            res.status(400).json('El id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).json('Ups... ocurrió algo en el proceso, comuníquese con el administrador.')
    }
}

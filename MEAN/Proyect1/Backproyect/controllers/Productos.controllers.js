const Productos = require('../models/Productos')




// METODO POST
exports.creacionproducto = async (req, res) => {
    try {
        const busquedaproducto = await Productos.findOne({ "_id": req.body._id }).exec()
        if (busquedaproducto != null) {
            console.log('ERROR - DATOS EXISTENTES EN DB.')
            console.log(busquedaproducto)
            res.status(503).json('Los datos ingresados ya estan creados, se creativo :).')
            return
        }
        let Productomodel = new Productos(req.body)
        await Productomodel.save()
        res.json(Productomodel)
        console.log('Producto CREADO CON EXITO :)');
        console.log(Productomodel)
    } catch (error) {
        console.log(error)
        res.status(502).json('Ups... Ocurrió un error, avisa al Admin.')
    }
}

// METODO GET 

exports.mostrarProductos = async (req, res) => {
    try {
        const Productosdata = await Productos.find()
        res.json(Productosdata)
    } catch (error) {
        console.log(error)
        res.status(502).json('Ups... Ocurrió un error, avisa al Admin.')
    }
}

// METODO GET PERO SOLO UN OBJETO 

exports.mostarunsoloproducto = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const productodata = await Productos.findById(req.params.id)
            console.log(productodata)
            if (!productodata) {
                res.status(404).json('Personaje no encontrado')
            } else {
                res.json(productodata)
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

// METODO GET POR NOMBRE

exports.Busquedapornombreproduct = async (req, res) => {
    try {
        const productodata = await Productos.find({ nProduct: req.params.nProduct })
        if (!productodata) {
            res.status(404).json({ Message: 'Personaje no encontrado' })
            return
        } else {
            res.json(productodata)
        }
        // } else {
        //     // status(418) es una respiuesta comica del error 400 "No puedo preparar cafe porque soy una tetera" "I´m a teapot"
        //     res.status(400).json('El id proporcionado no existe o no es correcto')
    } catch (error) {
        console.log(error)
        res.status(502).json('Ups... ocurrió algo en el proceso, comuníquese con el administrador.')
    }
}

// METODO DELETE 
exports.borrarproducto = async (req, res) => {
    try {
        let regexIdmongo = /^[0-9a-fA-F]{24}$/
        if (regexIdmongo.test(req.params.id)) {
            const productodata = await Productos
            if (!productodata) {
                res.status(404).json('El Id proporcionado no se encuentra')
            } else {
                await Productos.findOneAndRemove({ _id: req.params.id })
                // se puede hacer con varios identificadores, no solo con el id o su valor
                res.json({ nombre: 'Producto eliminado con exito' })
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

exports.actualizarproducto = async (req, res) => {
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
            const productodata = await Productos.FindById(req.params.id)
            if (!productodata) {
                res.status(404).json('Producto no encontrado')
            } else {
                const { nProduct, Urlimagen, categoria, alto, ancho, precio } = req.body
                productodata.nProduct = nProduct
                productodata.Urlimagen = Urlimagen
                productodata.categoria = categoria
                productodata.alto = alto
                productodata.ancho = ancho
                productodata.precio = precio
                let documentoActualizado = await Productos.findOneAndUpdate({ _id: req.params.id }, productodata, { new: true })
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

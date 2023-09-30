const express = require('express')  //llamada del servicio express


const router = express.Router()

const objetoscontroller = require('../controllers/objetos.controllers')
const personitacontroller = require('../controllers/Lucho.controllers')
const productoscontroller = require('../controllers/Productos.controllers')


// PRIMERA RUTA DE GPPD - CRUD -- PERSONAJES ANIME EJEMPLO 


router.get('/obtener-personajes', objetoscontroller.obtenerTodoslospersonajes)
router.get('/buscar-personaje/:id', objetoscontroller.obtenerUnSolopersonaje)
router.post('/crear_objeto', objetoscontroller.crearobjeto)
router.put('/actualizar-personaje/:id', objetoscontroller.actualizarobjeto)
router.delete('/eliminar-personaje/:id', objetoscontroller.eliminarpersonaje)

// SEGUNDA RUTA DE GPPD PERSONITAS DE REGISTRO E INICIO DE SESION

router.get('/obtenerunsoloperson', personitacontroller.mostarunasolapersonita)
router.get('/verpersonas', personitacontroller.mostrarPersonitass)
router.post('/crearpersonita', personitacontroller.creacionpersonita)
router.delete('/eliminar-personita/:id', personitacontroller.borrarpersonita)
router.put('/actualizar-person', personitacontroller.actualizarpersonta)

module.exports = router

//http://localhost:3000/api/v1/buscar-personaje/


//TERCERA RUTA DE GPPD - CRUD  PRODUCTOS DEL INICIO

router.get('/obtenerunsoloproducto/:id', productoscontroller.mostarunsoloproducto)
router.get('/obtenerproductos', productoscontroller.mostrarProductos)
router.post('/crearproducto', productoscontroller.creacionproducto)
router.delete('/borrarproducto/:id', productoscontroller.borrarproducto)
router.put('/actualizarproducto/:id', productoscontroller.actualizarproducto)



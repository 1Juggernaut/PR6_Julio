const express = require('express')  //llamada del servicio express


const router = express.Router()

//controlador de ejemplo (personajes de anime)
const objetoscontroller = require('../controllers/objetos.controllers')

//controlador de registro e inicio de sesion - Usuarios
const usuarioscontroller = require('../controllers/Usuarios.controllers')

// controlador para los productos 
const productoscontroller = require('../controllers/Productos.controllers')

// controlador de token de seguridad 

const sessionController = require('../controllers/sesionController')

// middleware o supervisor de seguridad del JWT entrante
const mdJWT = require('../middleware/jwt')

// PRIMERA RUTA DE GPPD - CRUD -- PERSONAJES ANIME EJEMPLO 


router.get('/obtener-personajes', objetoscontroller.obtenerTodoslospersonajes)
router.get('/buscar-personaje/:id', objetoscontroller.obtenerUnSolopersonaje)
router.post('/crear_objeto', objetoscontroller.crearobjeto)
router.put('/actualizar-personaje/:id', objetoscontroller.actualizarobjeto)
router.delete('/eliminar-personaje/:id', objetoscontroller.eliminarpersonaje)

// SEGUNDA RUTA DE GPPD PERSONITAS DE REGISTRO E INICIO DE SESION

router.get('/usuario/:id', usuarioscontroller.mostarunasolapersonita)
router.get('/verususarios', mdJWT.verificarToken, usuarioscontroller.mostrarPersonitass)
router.post('/crearusuario', usuarioscontroller.creacionpersonita)
router.delete('/eliminar-usuario/:id', mdJWT.verificarToken, usuarioscontroller.borrarpersonita)
router.put('/actualizar-usuario/:id', mdJWT.verificarToken, usuarioscontroller.actualizarpersonta)

//generacion de token de seguridad
router.post('/ingreso', sessionController.generarToken)

//desecnriptar el token para acceder a su payload
router.post('/info-token', sessionController.desencriptarToken)

module.exports = router

//http://localhost:3000/api/v1/buscar-personaje/


//TERCERA RUTA DE GPPD - CRUD  PRODUCTOS DEL INICIO

router.get('/obtenerunsoloproducto/:id', productoscontroller.mostarunsoloproducto)
router.get('/obtenerproductos', productoscontroller.mostrarProductos)
router.post('/crearproducto', mdJWT.verificarToken, productoscontroller.creacionproducto)
router.delete('/borrarproducto/:id', mdJWT.verificarToken, productoscontroller.borrarproducto)
router.put('/actualizarproducto/:id', mdJWT.verificarToken, productoscontroller.actualizarproducto)



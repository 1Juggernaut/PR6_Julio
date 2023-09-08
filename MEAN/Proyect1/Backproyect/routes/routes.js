const express = require('express')  //llamada del servicio express


const router = express.Router()

const objetoscontroller = require('../controllers/objetos.controllers')


router.get('/obtener-personajes', objetoscontroller.obtenerpersonajes)
router.post('/crear_objeto', objetoscontroller.crearobjeto)
router.put('/', objetoscontroller.actualizarobjeto)
router.delete('/', objetoscontroller.eliminarpersonaje)


module.exports = router

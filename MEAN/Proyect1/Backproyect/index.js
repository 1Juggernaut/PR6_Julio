const express = require('express')  //llamada del servicio express
const conectarDB = require('./config/db')



const app = express()  //   Implementacion del serivcio
conectarDB()        //funcion de conexión a database

app.use(express.json())

//rutas - endpoint

app.use('/api/v1', require('./routes/routes'))

//creacion de servidor para ejecturalo en un localhost
app.listen(3000, () => {
    console.log("La aplicacion se esta ejectuando en http://localhost:3000")
})

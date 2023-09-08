// const os = require('os')
// console.log(os.arch())
// console.log(os.platform())
// console.log(os.totalmem())

const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`<h1>Hola mundo desde HadasdddaddTTP-NODE</h1>`)
    res.end
})


server.listen(3001, () => {
    console.log("La aplicacion se esta ejecutando desde http://localhost:3001")
})
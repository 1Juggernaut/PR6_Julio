


// Punto No1 
let formulariopt1 = document.querySelector("#formpunto1")
formulariopt1.addEventListener('submit', (Eventopt1) => {
    Eventopt1.preventDefault()

    let Npt1 = document.querySelector("#Numero1").value
    let suma = 0
    for (let i = 1; i <= Npt1; i++) {
        suma += i
    }
    // si se quiere poner un alert 
    // alert("Su suma es " + suma)

    let textpt1 = document.querySelector("#resultpt1")


    Swal.fire({
        title: '¡El resultado es ' + suma + ' !',
        imageUrl: 'assets/img/imgspt2/gifpunto1.webp',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
}
)

// Punto No 2😁
let formpunto2 = document.querySelector("#formpt2")

formpunto2.addEventListener('submit', (Pt2even) => {
    Pt2even.preventDefault()
    let valornumpt2 = document.querySelector("#Numeropt2").value

    // otra forma para adquirir un valor de un input en un formulario
    // let valurnumpt2segundaforma = Pt2even.target.Numeropt2.value

    let textopt2 = document.querySelector("#resultadonumero2")

    if (valornumpt2 % 2 == 0) {
        Swal.fire({
            title: 'Es par ✌️😲!',
            imageUrl: 'assets/img/imgspt2/gifpunto2par.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    } else {
        Swal.fire({
            title: 'Es impar 👌😲!',
            imageUrl: 'assets/img/imgspt2/gifpunto2impar.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }
})

//Punto 3 👌
let formpt3 = document.querySelector("#questpt3")

formpt3.addEventListener('submit', (eventoregalo))
eventoregalo.preventDefault()
let edad = document.querySelector("#edadpt3")
let gender = document.querySelector("#genderpt3")



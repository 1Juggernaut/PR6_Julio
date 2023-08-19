


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

formpt3.addEventListener('submit', (eregalo) => {
    eregalo.preventDefault()
    let edad = eregalo.target.edadpt3.value
    let gender = eregalo.target.genderpt3.value


    if (edad < 10) {
        if (gender == "Hombre" || gender == "hombre") {
            Swal.fire({
                title: 'Te ganaste un jugo y una pizza de tres carnes!',
                text: "🧃 🍕🍗🍖",
                imageUrl: 'assets/img/imgpt3/jugopizzamale.gif',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
        } else if (gender == "Mujer" || gender == "mujer") {
            Swal.fire({
                title: 'Te ganaste un jugo y una pizza Hawaiana!',
                text: "🧃 🍕",
                imageUrl: 'assets/img/imgpt3/jugopizzafemale.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Verifica los datos ingresados 🤨.',
                text: 'Rectifica tu edad y tu género por favor. 😐',
            })
        }
    }

    if (edad > 18) {
        if (gender == "Hombre" || gender == "hombre") {
            Swal.fire({
                title: 'Te ganaste una pola y una pizza de tres carnes!',
                text: "🍺 🍕🍗🍖",
                imageUrl: 'assets/img/imgpt3/pizzapolamale.gif',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })

        } else if (gender == "Mujer" || gender == "mujer") {
            Swal.fire({
                title: 'Te ganaste una pola y una pizza Hawaiana!',
                text: "🍺 🍕",
                imageUrl: 'assets/img/imgpt3/pizzapolafemale.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Verifica los datos ingresados 🤨.',
                text: 'Rectifica tu edad y tu género por favor. 😐',
            })
        }
    }
    if (edad > 9 && edad <= 18) {
        Swal.fire({
            icon: 'error',
            title: 'Que lástima, no recibes premio.',
            text: '☹️',
        })
    }
})

// Punto 4 :)

const Menucomida = [
    { nombre: 'Pizza 🍕', precio: '$ 14.000' },
    { nombre: 'Hamburguesa 🍔', precio: '$19.000' },
    { nombre: 'Mazorcada 🌽', precio: '$ 9.500' },
    { nombre: 'Perro caliente 🌭', precio: '$ 12.000' },
    { nombre: 'Helado 🍨', precio: '$ 8.500'},
    { nombre : 'Juguito 🧃' , precio: '$ 3.000'}, 
]

let listacomidas = document.querySelector("#Listacomer")

for (let grillaproductos = 0; grillaproductos < Menucomida.length; grillaproductos++) {
    listacomidas.innerHTML += `
    <li>${Menucomida[grillaproductos].nombre}  VALOR : ${Menucomida[grillaproductos].precio}</li>
    
    `
}


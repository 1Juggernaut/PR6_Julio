// Punto 1 crear clase y un objeto de este....

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre
    this.edad = edad
    this.profesion = profesion
  }

}

let pt1 = document.querySelector("#Btnpunto1")

pt1.addEventListener("click", () => {

  let p1 = new Persona("pancracio", 28, "Piloto")
  let p2 = new Persona("Astolfo", 34, "Ingeniero")
  let p3 = new Persona("Pablo", 25, "Vendedor")
  let divpersonas = document.querySelector("#personas1")
  divpersonas.innerHTML = ``
  divpersonas.innerHTML += `
        <div class="card">
        <div class="card-body">
          Hola! Soy ${p1.nombre}, tengo ${p1.edad} y trabajo como ${p1.profesion}. 
        </div>
        </div>
        <div class="card">
        <div class="card-body">
          Hola! Soy ${p2.nombre}, tengo ${p2.edad} y trabajo como ${p2.profesion}. 
        </div>
        </div>
        <div class="card">
        <div class="card-body">
          Hola! Soy ${p3.nombre}, tengo ${p3.edad} y trabajo como ${p3.profesion}. 
        </div>
        </div>
`
})


// Punto 2 :) ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
  }

  Arrancar() {
    return "Arranca el auto (🚗)"
  }

  Detener() {
    return " Se detiiene el auto (🧱) "
  }

}

class Coche extends Vehiculo {
  constructor(marca, modelo) {
    super(marca, modelo)
  }

  Acelerar() {
    return "Acelerando (🚀)"
  }
}
console.log


let btnpadre = document.querySelector("#padrept2")
let carfather = document.querySelector("#padrept2car")


btnpadre.addEventListener("click", () => {
  let carpadre = new Vehiculo("Mazda", "2012")

  carfather.innerHTML = `
  El Vehiculo es una camioneta ${carpadre.marca} modelo ${carpadre.modelo}.
  <div> Metodos
    <ul>
      <li> - ${carpadre.Arrancar()} </li>
      <li> - ${carpadre.Detener()}</li>
    </ul>
  
  </div>
  `

})

let btnhija = document.querySelector("#hijapt2")
let divhijacoche = document.querySelector("#hijapt2car")

btnhija.addEventListener("click", () => {
  const Coche1 = new Coche("Toyota", "2023")
  divhijacoche.innerHTML = `El Vehiculo es una camioneta ${Coche1.marca} modelo ${Coche1.modelo}.
<div> Metodos
  <ul>
    <li> - ${Coche1.Arrancar()} </li>
    <li> - ${Coche1.Detener()}</li>
    <li class="bg-danger"> - ${Coche1.Acelerar()}</li>
  </ul>
</div>`
})

//  PUNTO 3 :)))

class CuentaBancaria {
  constructor(saldo) {
    this.saldo = saldo
  }

  depositar(valor1) {
    this.saldo += valor1
  }

  retirar(valor) {
    this.saldo -= valor
  }

}

let Cuentabanco = new CuentaBancaria(3000)

let formpunto3 = document.querySelector("#punto3")

let divresultado3 = document.querySelector("#divresultado")

formpunto3.addEventListener("submit", (evento) => {
  evento.preventDefault()

  let valorselek = evento.target.punto3form.value

  switch (valorselek) {
    case "depositar":
      Cuentabanco.depositar(2500)
      Swal.fire({
        title: 'Deposito exitoso!',
        html: `Te depositaron $2500 🤑🤑 <br><br> Nuevo saldo:$${Cuentabanco.saldo}`,
        imageUrl: 'https://img.freepik.com/vector-premium/icono-linea-vectorial-acumulacion-efectivo-ahorros-banco-acumulan-depositos-banca-exitosa-futuro_92753-6411.jpg?w=2000',
        imageWidth: 400,
        imageHeight: 300,
      })
      break;
    case "Versaldo":
      Swal.fire({
        text: `Tu saldo actual es $${Cuentabanco.saldo}`,
        imageUrl: 'https://magosdalmatas.es/wp-content/uploads/2021/12/que-es-saldo-contable-se-puede-retirar.jpg',
        imageWidth: 400,
        imageHeight: 300,
      })
      break;
    case "retirar":
      let value = 2350
      if (Cuentabanco.saldo < value) {
        Swal.fire({
          title: 'Saldo insuficiente',
          text: 'No te alcanza para retirar.',
          imageUrl: 'assets/img/sadpikachu/giphy.gif',
          imageWidth: 400,
          imageHeight: 300,
        })
      } else {

        Cuentabanco.retirar(value)
        Swal.fire({
          text: `Retiro exitoso! 💵 `,
          html: `Retiraste $2350 💵 <br><br> Nuevo saldo:$${Cuentabanco.saldo}`,
          imageUrl: 'https://portafolio.co/files/article_content/uploads/2021/06/08/60bf020b4e8bc.jpeg',
          imageWidth: 400,
          imageHeight: 300,
        })
      }
      break;

    default:
      break;
  }
})

// PUNTO 4 -------------------------------------------------------------



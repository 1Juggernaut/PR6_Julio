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

  console.log(carpadre)
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




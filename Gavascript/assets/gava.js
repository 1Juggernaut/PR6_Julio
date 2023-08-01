
let Viajes =  [
    { "Nombre": "Viaje a la playa", "Valor": 1200, "Imagen": "assets/img/playaimg.jpg", "Cantidad": 6 },
    { "Nombre": "Excursión a la montaña", "Valor": 800, "Imagen": "assets/img/Montana.jpeg", "Cantidad": 6 },
    { "Nombre": "Viaje a la ciudad", "Valor": 1500, "Imagen": "assets/img/ciudad.jpeg", "Cantidad": 6 },
    { "Nombre": "Aventura en la selva", "Valor": 1800, "Imagen": "assets/img/selva.jpeg", "Cantidad": 4 },
    { "Nombre": "Tour cultural", "Valor": 950, "Imagen": "assets/img/tourcult.jpeg", "Cantidad": 8    },
    { "Nombre": "Escapada de fin de semana", "Valor": 700, "Imagen": "assets/img/weekend.jpg", "Cantidad": 10 }
    ] 

let Viajesgrillas = document.querySelector("#Arraycategorias")

for (let comtador = 0; comtador < Viajes.length; comtador++) {
    Viajesgrillas.innerHTML += `
    <div class="card">
        <img src=" ${Viajes[comtador].Imagen} " class="card-img-top w-100 h-100">
        <div class="card-body">
            <h5 class="card-title"> ${Viajes[comtador].Nombre}</h5>
            <p class="card-text fw-bold"> Valor : ${Viajes[comtador].Valor}</p>
            <p class="card-text"> Personas : ${Viajes[comtador].Cantidad}</p>
        </div>
    </div>
    `


}


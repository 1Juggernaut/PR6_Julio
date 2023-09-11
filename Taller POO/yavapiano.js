
let botones = document.querySelector("#sectbotones")




class TeclaPiano {
    constructor(nombreaudio, tecla,) {
        this.nombreaudio = nombreaudio
        this.tecla = tecla
        this.elemento = document.createElement('button')
        this.elemento.className = "tecla-piano"
        this.elemento.dataset.nombreaudio = nombreaudio
        this.elemento.addEventListener("click", this.Reproducir.bind(this))
        this.elemento.textContent = tecla

    }
    Reproducir() {
        const audio = new Audio(this.nombreaudio)
        audio.play()
    }

}

let NotaDo = new TeclaPiano("notas/nota1.mp3", "Do")
let NotaRe = new TeclaPiano("notas/nota2.mp3", "Re")
let NotaMi = new TeclaPiano("notas/nota3.mp3", "Mi")
let NotaFa = new TeclaPiano("notas/nota4.mp3", "Fa")
let NotaSol = new TeclaPiano("notas/nota5.mp3", "Sol")
let NotaLa = new TeclaPiano("notas/nota6.mp3", "La")
let NotaSi = new TeclaPiano("notas/nota7.mp3", "Si")
let Notado = new TeclaPiano("notas/nota8.mp3", "do")





botones.appendChild(NotaDo.elemento)
botones.appendChild(NotaRe.elemento)
botones.appendChild(NotaMi.elemento)
botones.appendChild(NotaFa.elemento)
botones.appendChild(NotaSol.elemento)
botones.appendChild(NotaLa.elemento)
botones.appendChild(NotaSi.elemento)
botones.appendChild(Notado.elemento)
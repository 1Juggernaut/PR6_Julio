console.log('Hola mundo con Typescrypt')

let nombre: string = "miguel"
let numero: number = 90
let booleano: boolean = true
let todo: any

let miArray: any[] = ["hola", 28, true]
let miArraydetextos: string[] = ["texto", "texto2", "texto3"]
let miArraydenumeros: number[] = [2, 5, 7, 3]
let miArraydebooleanos: boolean[] = [true, false, false, true]
let Arrayvalordefinido: [string, boolean, string, number] = ["jola", true, "wer", 23]
let Arraydefinidodearray: [string, boolean, string, number][] = [["jola", true, "wer", 23,], ["lop", true, "loa", 23]]

//datos vacios => null - undefined - void

// let vacioExistencial: void = undefined       //como tal no tiene nada, lo acepta 
// let nulo: null = null        //a veces puede dar como definicion un Object --> Es un bug a veces es tratado como objeto ojo 
// let indefinido: undefined = undefined

// console.log(typeof (indefinido));

function miFuncion(name: string, edad: number): boolean {
    if (nombre == 'Alejandra' && edad == 12) {
        return true
    } else {
        return false
    }
}

miFuncion("Tatiana", 105)
console.log(miFuncion("Tatiana", 105))

interface HarryPotter {
    hechizo: string,
    varita: any[]
}

function hogwarts(inFoHechizo: HarryPotter): any {
    console.log(inFoHechizo);

}

hogwarts({ hechizo: "lumus", varita: ["madera de roble", "12cm", "Olivanders"] })

let embrujo: HarryPotter = { hechizo: "Leviosssssa", varita: ["madera de roble", "35 cm", "Olviander"] }


class Usuario {
    public nombre: string
    protected correo: string
    private numero_documento: string
    public HechizoEsoterico: HarryPotter



    constructor(nombre: string, correo: string, numero_documento: string, HechizoEsoterico: HarryPotter) {
        this.nombre = nombre
        this.correo = correo;
        this.numero_documento = numero_documento
    }
    verNumeroDoc() {
        return this.numero_documento
    }

}

let ObjUsuario = new Usuario("Julian", "Julian123@correo.com", "2323324234", embrujo)
console.log(ObjUsuario.verNumeroDoc());

class Entregas extends Usuario {
    curso: string
    equipo: string

    constructor(nombre: string, correo: string, numero_documento: string, HechizoEsoterico: HarryPotter, curso: string, equipo: string) {
        super(nombre, correo, numero_documento, HechizoEsoterico)
        this.curso = curso
        this.equipo = equipo
    }
}
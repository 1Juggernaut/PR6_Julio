export class Personajes {
    _id?: string
    nombre: string
    apellido: string
    cedula: number


    constructor(nombre: string, apellido: string, cedula: number) {
        this.nombre = nombre
        this.apellido = apellido
        this.cedula = cedula
    }

}

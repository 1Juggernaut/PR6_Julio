export class Personajes {
    _id?: string
    nombre: string
    apellido: string
    direccion_correo: string
    usuario: string
    password: string
    numero_tel: string
    pais_tel: number


    constructor(nombre: string, apellido: string, direccion_correo: string, usuario: string, password: string, numero_tel: string, pais_tel: number) {
        this.nombre = nombre
        this.apellido = apellido
        this.direccion_correo = direccion_correo
        this.usuario = usuario
        this.password = password
        this.numero_tel = numero_tel
        this.pais_tel = pais_tel
    }

}

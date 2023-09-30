// Exportacion de modelo de Productos en el frontend, para poder enviarlos al serivicio para interactuar con el back. Esto permite validar que la informacion ingresada por el usuario sea valida y no comprometa la integridad de los datos en el DB


export class Productos {
    _id?: string
    nProduct: string
    Urlimagen: string
    categoria: string
    alto: number
    ancho: number
    precio: number


    constructor(nProduct: string, Urlimagen: string, categoria: string, alto: number, ancho: number, precio: number) {
        this.nProduct = nProduct
        this.Urlimagen = Urlimagen
        this.categoria = categoria
        this.alto = alto
        this.ancho = ancho
        this.precio = precio
    }

}

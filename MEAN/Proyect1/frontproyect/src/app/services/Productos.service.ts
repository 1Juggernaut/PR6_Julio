import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from "../models/Productos";

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    url = 'http://localhost:3000/api/v1'

    constructor(private http: HttpClient) { }

    getTodosproductos(): Observable<any> {
        return this.http.get(`${this.url}/obtenerproductos`)
    }

    getUnproducto(idproducto: string): Observable<any> {
        return this.http.get(`${this.url}/obtenerunsoloproducto/${idproducto}`)
    }


    postProducto(producto: Productos): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.post(`${this.url}/crearproducto`, producto, { headers })
    }
    putproducto(id_product: string | null, Dataproducto: Productos): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.put(`${this.url}/actualizarproducto/${id_product}`, Dataproducto, { headers })
    }
    deleteProducto(id_product: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.delete(`${this.url}/borrarproducto/${id_product}`, { headers })
    }


    //validacion de correo y pass igual a la del db para creacion de token de seguridad
    postIngresoCuenta(datalogin: object): Observable<any> {
        return this.http.post(`${this.url}/ingreso`, datalogin)
    }

    estaLogueado() {

        // rectifica si esta ingresando a la cuenta
        // if (sessionStorage.getItem('token') != null) {
        //     return true
        // } else {
        //     return false
        // }

        //evaluacion ternaria para verificar si tiene un token sesisonstorga ede token
        return (sessionStorage.getItem('token') != null) ? true : false
    }

    postdesencriptarToken(token: string): Observable<any> {
        return this.http.post(`${this.url}/info-token`, { tokenUser: token })
    }
}

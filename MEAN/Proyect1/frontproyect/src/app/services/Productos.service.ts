import { HttpClient } from '@angular/common/http';
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

    getUnproducto(): Observable<any> {
        return this.http.get(`${this.url}`)
    }
    postProducto(producto: Productos): Observable<any> {
        return this.http.post(`${this.url}/crearproducto`, producto)
    }
    putproducto(id_product: string, Dataproducto: Productos): Observable<any> {
        return this.http.put(`${this.url}/actualizarproducto/${id_product}`, Dataproducto)
    }
    deleteProducto(id_product: string): Observable<any> {
        return this.http.delete(`${this.url}/borrarproducto/${id_product}`)
    }












}

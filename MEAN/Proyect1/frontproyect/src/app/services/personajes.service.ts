import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personajes } from "../models/personitas";

@Injectable({
    providedIn: 'root'
})
export class PersonajesService {

    url = 'http://localhost:3000/api/v1'

    constructor(private http: HttpClient) { }

    getAllPersonitas(): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.get(`${this.url}/verususarios`, { headers })
    }

    getOnePersonitas(idUsuario: string): Observable<any> {
        return this.http.get(`${this.url}/usuario/${idUsuario}`)
    }

    postPersonita(personita: Personajes): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.post(`${this.url}/crearusuario`, personita, { headers })
    }

    putPersonita(idUsuario: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.put(`${this.url}`, { headers })
    }

    deletePersonita(idUsuario: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.delete(`${this.url}/eliminar-usuario/${idUsuario}`, { headers })
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

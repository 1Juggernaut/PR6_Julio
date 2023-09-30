import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personajes } from "../models/personitas";

@Injectable({
    providedIn: 'root'
})
export class PersonajesService {

    url = 'http://localhost:3000/api/v1'

    constructor(private http: HttpClient) { }

    getAllPersonitas(): Observable<any> {
        return this.http.get(`${this.url}/verpersonas`)
    }

    getOnePersonitas(): Observable<any> {
        return this.http.get(`${this.url}`)
    }

    postPersonita(personita: Personajes): Observable<any> {
        return this.http.post(`${this.url}/crearpersonita`, personita)
    }

    putPersonita(): Observable<any> {
        return this.http.put(`${this.url}`, {})
    }

    deletePersonita(): Observable<any> {
        return this.http.delete(`${this.url}`)
    }


}

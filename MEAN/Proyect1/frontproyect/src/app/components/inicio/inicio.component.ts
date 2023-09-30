import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Personajes } from "src/app/models/personitas";
import { PersonajesService } from "src/app/services/personajes.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from 'sweetalert2'


@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    listaPersonajes: Personajes[] = [];

    Personitaformulario: FormGroup

    regexAlfabetico = /^[A-Za-z ]+$/

    regexSoloNumeros = /^[0-9]+$/

    constructor(private _personitaservice: PersonajesService, private fb: FormBuilder) {

        this.Personitaformulario = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            apellido: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            cedula: ['', [Validators.required, Validators.pattern(this.regexSoloNumeros), Validators.minLength(10)]]
        })
    }



    ngOnInit(): void {
        this.obtenerPersonitas();
    }

    obtenerPersonitas() {
        this._personitaservice.getAllPersonitas().subscribe(data => {
            // console.log(data);
            this.listaPersonajes = data
        }, Error => {
            console.log(Error);

        })
    }

    agregarPersonita() {
        console.log(this.Personitaformulario)
        let dataForm: Personajes = this.Personitaformulario.value
        this._personitaservice.postPersonita(dataForm).subscribe(data => {
            Swal.fire({
                icon: 'success',
                title: 'Personita creada',
            })
            this.obtenerPersonitas()
            this.borrarFormulario()
        })
    }

    borrarFormulario() {
        this.Personitaformulario.reset()
    }

}

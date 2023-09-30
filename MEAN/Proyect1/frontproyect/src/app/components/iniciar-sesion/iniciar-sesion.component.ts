import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personajes } from "src/app/models/personitas";
import { PersonajesService } from "src/app/services/personajes.service";

@Component({
    selector: 'app-iniciar-sesion',
    templateUrl: './iniciar-sesion.component.html',
    styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
    @ViewChild('miElemento') miCuadro!: ElementRef


    formularioRegistro: FormGroup
    regexAlfabetico = /^[A-Za-z ]+$/
    regexSoloNumeros = /^[0-9]+$/

    constructor(private fb: FormBuilder, private _personitaservice: PersonajesService) {


        this.formularioRegistro = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            apellido: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            cedula: ['', [Validators.required, Validators.pattern(this.regexSoloNumeros), Validators.minLength(10), Validators.maxLength(10)]]
            // urlimagen : ['assets/img/imgDefecto.png'] 
        })
    }

    CambiarColor() {
        console.log("Ola ke ase");
        this.miCuadro.nativeElement.classList.add('amarillo')
        this.miCuadro.nativeElement.classList.remove('negro')
    }

    Enviarformulario() {

        //manera en la que se toma todos los valores el formulario sin validar los tipos de datos
        // let manera1 = console.log(this.formularioRegistro.value);


        // manera2
        // ? manera en la que armamos el Json que requiere la API para usar sus endpoints (Normalmnete s ehace de esta manera cuando el formulario tiene campos que no necesitamos enviar a la API) 

        // const personajeFormulario: Personajes = {
        //     nombre: this.formularioRegistro.get('nombre')?.value,
        //     apellido: this.formularioRegistro.get('edad')?.value,
        //     cedula: this.formularioRegistro.get('cedula')?.value
        // }


        //  Manera en la cual tomamos todos los campos del formulario y validamos la estrucutra con el modelo creado
        let formularioData: Personajes = this.formularioRegistro.value

        this._personitaservice.postPersonita(formularioData).subscribe(data => {
            alert('personaje creado')
            console.log(data)
        }, Error => {
            console.log(Error);

        })


    }
}

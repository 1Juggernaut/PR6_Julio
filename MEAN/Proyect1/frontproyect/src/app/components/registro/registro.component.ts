import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PersonajesService } from "src/app/services/personajes.service";
import { Personajes } from "src/app/models/personitas";
import { ActivatedRoute, Router } from "@angular/router";  //camiba la vista del spa cuando se realiza una accion 

import Swal from 'sweetalert2'




@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    ngOnInit(): void {
        // this.obtenerUsuarios()
    }






    listaPersonajes: Personajes[] = [];
    Usuarioformulario: FormGroup
    regexAlfabetico = /^[A-Za-z ]+$/
    regexAlfabteicoyNumeros = /^[a-zA-Z0-9]+$/
    regexSoloNumeros = /^[0-9]+$/
    regexpass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?!.*\s).{8,}$/
    regexcorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    //variables para el put 

    // idUsuarioUrl:string | null



    constructor(private _usuarioservice: PersonajesService, private fb: FormBuilder, private Enrutador: Router, private idUsuarioRuta: ActivatedRoute) {
        this.Usuarioformulario = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            apellido: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            direccion_correo: ['', [Validators.required, Validators.pattern(this.regexcorreo)]],
            usuario: ['', [Validators.required, Validators.pattern(this.regexAlfabteicoyNumeros)]],
            password: ['', [Validators.required, Validators.pattern(this.regexpass)]],
            numero_tel: ['', [Validators.required, Validators.minLength(10)]],
            pais_tel: ['', [Validators.required, Validators.pattern(this.regexSoloNumeros)]]
        })
    }


    // this.idUsuarioUrl = this.idUsuarioRuta.snapshot.paramMap.get('id')

    // obtenerUsuarios() {
    //     this._usuarioservice.getAllPersonitas().subscribe(data => {
    //         // console.log(data);
    //         this.listaPersonajes = data
    //     }, Error => {
    //         console.log(Error);
    //     })
    // }

    // obtenerUnsoloUsuario() { }

    Resetform() {
        this.Usuarioformulario.reset()
    }

    agregarnuevoUsuario() {
        let Formulariodatos = this.Usuarioformulario.value
        console.log(Formulariodatos);

        this._usuarioservice.postPersonita(Formulariodatos).subscribe(datos => {
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado con exito :)',
            })
            this.Resetform()
            this.Enrutador.navigate(['/inisesion'])
        })
    }
}

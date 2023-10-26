import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PersonajesService } from "src/app/services/personajes.service";
import { Personajes } from "src/app/models/personitas";
import Swal from 'sweetalert2'

@Component({
    selector: 'app-lista-usuarios',
    templateUrl: './lista-usuarios.component.html',
    styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

    listaPersonajes: Personajes[] = [];

    Usuarioformulario: FormGroup

    regexAlfabetico = /^[A-Za-z ]+$/

    regexAlfabteicoyNumeros = /^[a-zA-Z0-9]+$/

    regexSoloNumeros = /^[0-9]+$/

    regexpass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?!.*\s).{8,}$/

    regexcorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    constructor(private _usuarioservice: PersonajesService, private fb: FormBuilder) {
        this.Usuarioformulario = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            apellido: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            direccion_correo: ['', [Validators.required, Validators.pattern(this.regexcorreo)]],
            usuario: ['', [Validators.required, Validators.pattern(this.regexAlfabteicoyNumeros)]],
            contraseña: ['', [Validators.required, Validators.pattern(this.regexpass)]],
            numero_tel: ['', [Validators.required, Validators.minLength(10)]]
        })
    }

    Resetform() {
        this.Usuarioformulario.reset()
    }

    ngOnInit(): void {
        this.obtenerUsuarios()
    }

    //GET GRUPAL
    obtenerUsuarios() {
        this._usuarioservice.getAllPersonitas().subscribe(data => {
            console.log(data);
            this.listaPersonajes = data
            console.log(this.listaPersonajes);

        }, Error => {
            console.log(Error);
        })
    }

    //GET INDIVIDUAL
    obtenerUnsoloUsuario() { }


    //POST
    agregarnuevoUsuario() {
        let Formulariodatos = this.Usuarioformulario.value
        this._usuarioservice.postPersonita(Formulariodatos).subscribe(datos => {
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado con exito :)',
            })
            this.obtenerUsuarios()
            this.Resetform()
        })
    }

    //DELETE
    Borrarusuario(idUsuario: any) {
        Swal.fire({
            title: 'Esta seguro que desea eliminar este Usuario?',
            text: "Tenga en cuenta que esta acción no sera reversible, se perderán los datos relacionados a este usuario.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#11a811',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            iconColor: '#db9a18'
        }).then((result) => {
            this._usuarioservice.deletePersonita(idUsuario).subscribe(resAPi => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto eliminado.',
                        iconColor: '#2ce30b'
                    })
                    this.obtenerUsuarios()
                }
            }, error => {
                console.log(error);
            })
        })
    }

}

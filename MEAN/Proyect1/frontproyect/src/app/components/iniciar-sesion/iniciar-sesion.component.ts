import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import Swal from 'sweetalert2'

import { PersonajesService } from "src/app/services/personajes.service";


@Component({
    selector: 'app-iniciar-sesion',
    templateUrl: './iniciar-sesion.component.html',
    styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
    @ViewChild('Btnsubmit') botonsubmit!: ElementRef




    Userformlogin = {
        direccion_correo: '',
        password: ''
    }

    constructor(private _usuarioService: PersonajesService, private router: Router) { }

    ingresarUsuario() {
        this._usuarioService.postIngresoCuenta(this.Userformlogin).subscribe(respuestaApi => {
            let tokenApi = respuestaApi.token
            // creacion de un token en el sessionstorage para rectificar si esta logueado el usuario
            sessionStorage.setItem('token', tokenApi)

            this._usuarioService.postdesencriptarToken(tokenApi).subscribe((respuestaApi2: any) => {
                sessionStorage.setItem('infoUsuario', JSON.stringify(respuestaApi2.decodedPayload))
                console.log(respuestaApi2);

                Swal.fire({
                    title: `Hola ${respuestaApi2.nombre}`,
                    html: '¡Bienvenido a Cristales Rico!',
                    timer: 1500
                })
            })
            this.router.navigate(['/'])

        }, err => {
            Swal.fire({
                icon: 'error',
                title: 'Usuario y/o contraseña incorrectos.',
            })
        })

    }
}

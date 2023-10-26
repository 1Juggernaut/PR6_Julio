import { inject } from "@angular/core";
import { CanMatchFn } from '@angular/router';
import { PersonajesService } from "src/app/services/personajes.service";


export const autenticacionGuard: CanMatchFn = (route, segments) => {
    const _usuarioService = inject(PersonajesService)
    return _usuarioService.estaLogueado()
};

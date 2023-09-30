import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TablamultiplicarComponent } from './ejemplos/tablamultiplicar/tablamultiplicar.component';
import { MisLikesComponent } from './ejemplos/mis.likes/mis.likes.component';


const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inisesion', component: IniciarSesionComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'tablamultiplicar', component: TablamultiplicarComponent },
    { path: 'mislikes', component: MisLikesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TablamultiplicarComponent } from './ejemplos/tablamultiplicar/tablamultiplicar.component';
import { MisLikesComponent } from './ejemplos/mis.likes/mis.likes.component';
import { CreacionproductosComponent } from './admin/creacionproductos/creacionproductos.component';
import { ListaUsuariosComponent } from './admin/lista-usuarios/lista-usuarios.component';
import { autenticacionGuard } from "./guards/autenticacion.guard";
import { Error404Component } from './components/error404/error404.component';


const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inisesion', component: IniciarSesionComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'ejemplos/tablamultiplicar', component: TablamultiplicarComponent },
    { path: 'ejemplos/mislikes', component: MisLikesComponent },
    { path: 'admin/crear-producto', canMatch: [autenticacionGuard], component: CreacionproductosComponent },
    { path: 'admin/lista-usuarios', canMatch: [autenticacionGuard], component: ListaUsuariosComponent },
    { path: '404', component: Error404Component },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

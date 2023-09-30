import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ProductosComponent } from './components/productos/productos.component';

import { CreacionproductosComponent } from './admin/creacionproductos/creacionproductos.component';
import { MisLikesComponent } from './ejemplos/mis.likes/mis.likes.component';
import { TablamultiplicarComponent } from './ejemplos/tablamultiplicar/tablamultiplicar.component';

@NgModule({
    declarations: [
        AppComponent,
        BarraNavegacionComponent,
        InicioComponent,
        PiePaginaComponent,
        IniciarSesionComponent,
        RegistroComponent,
        ProductosComponent,
        CreacionproductosComponent,
        MisLikesComponent,
        TablamultiplicarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

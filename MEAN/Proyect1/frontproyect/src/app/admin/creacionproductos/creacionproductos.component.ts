import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Productos } from "src/app/models/Productos";
import { ProductoService } from "src/app/services/Productos.service";
import { CurrencyPipe } from "@angular/common";
import Swal from 'sweetalert2'

@Component({
    selector: 'app-creacionproductos',
    templateUrl: './creacionproductos.component.html',
    styleUrls: ['./creacionproductos.component.css']
})
export class CreacionproductosComponent {

    listaProductos: Productos[] = []

    Productoformulario: FormGroup

    regexAlfabetico = /^[A-Za-z ]+$/

    regexSoloNumeros = /^[0-9]+$/

    // Formatoprecio(precio: number): string {
    //     if (precio >= 1000000) {
    //         return `${(precio).toFixed(2)}`
    //     } else if (precio >= 1000) {
    //         return `${(precio / 1000).toFixed(0)}`
    //     } else {
    //         return `${precio.toFixed(0)}`
    //     }
    // }



    constructor(private _productosservice: ProductoService, private fb: FormBuilder) {
        this.Productoformulario = this.fb.group({
            nProduct: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            Urlimagen: ['', [Validators.required]],
            categoria: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            alto: ['', [Validators.required, Validators.pattern(this.regexSoloNumeros), Validators.min(40), Validators.max(1000)]],
            ancho: ['', [Validators.required, Validators.pattern(this.regexSoloNumeros), Validators.min(40), Validators.max(1000)]],
            precio: ['', [Validators.required, Validators.pattern(this.regexSoloNumeros)]]
        })
    }


    obtenerPoductos() {
        this._productosservice.getTodosproductos().subscribe(data => {
            console.log(data);
            this.listaProductos = data
        }, error => {
            console.log(error);

        })
    }

    agregarProducto() {
        console.log(this.Productoformulario)
        // let dataForm: Productos = this.Productoformulario.value
        this._productosservice.postProducto(this.Productoformulario.value).subscribe(data => {
            Swal.fire({
                icon: 'success',
                title: 'Producto creado',
            })
            this.obtenerPoductos()
            this.borrarFormulario()
        })
    }

    borrarFormulario() {
        this.Productoformulario.reset()
    }

    Eliminarproducto(id_product: any) {
        Swal.fire({
            title: 'Esta seguro que desea eliminar el Producto?',
            text: "Tenga en cuenta que esta acción no sera reversible, se perderá el producto ☹️",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#11a811',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            iconColor: '#db9a18'
        }).then((result) => {
            this._productosservice.deleteProducto(id_product).subscribe(resAPi => {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto eliminado.',
                    iconColor: '#2ce30b'
                })
                this.obtenerPoductos()
            }, error => {
                console.log(error);
            })
        })
    }
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Productos } from "src/app/models/Productos";
import { ProductoService } from "src/app/services/Productos.service";
import { CurrencyPipe } from "@angular/common";
import Swal from 'sweetalert2'


@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


    constructor(private _productosservice: ProductoService) { }

    ngOnInit(): void {
        this.obtenerPoductos();
    }
    listaProductos: Productos[] = []

    obtenerPoductos() {
        this._productosservice.getTodosproductos().subscribe(data => {
            console.log(data);
            this.listaProductos = data
        }, error => {
            console.log(error);

        })
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
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto eliminado.',
                        iconColor: '#2ce30b'
                    })
                    this.obtenerPoductos()
                }
            }, error => {
                console.log(error);
            })
        })
    }


}

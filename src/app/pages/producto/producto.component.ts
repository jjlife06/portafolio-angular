import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  producto: ProductoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {

      this.route.params.subscribe(
        parametros => {
          // tslint:disable-next-line: no-string-literal
          console.log(parametros['id']);
          // tslint:disable-next-line: no-string-literal
          this.productoService.getProducto(parametros['id']).subscribe(
            (producto: ProductoDescripcion) => {
              // tslint:disable-next-line: no-string-literal
              this.id = parametros['id'];
              this.producto = producto;
            }
          );
        }
      );
  }

}

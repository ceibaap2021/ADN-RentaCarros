import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';
@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.sass']
})
export class ListarProductoComponent implements OnInit {
  public listaProductos: Observable<Producto[]>;
  public isEdit: boolean;
  public displayedColumns: string[] = ['placa', 'modelo', 'gama', 'valor', 'selected'];
  public dataSource : Observable<Producto[]>;
  constructor(protected productoService: ProductoService) { }

  ngOnInit() {
    this.consultar();
  }

  public consultar() {
    this.dataSource = this.productoService.consultar();

  }
  public eliminar(data) {
    this.productoService.eliminar(data).subscribe(() => {
      this.consultar();
    });
  }
 
}

import { Component, OnInit } from '@angular/core';
import { Producto } from '@producto/shared/model/producto';
import { ProductoService } from '@producto/shared/service/producto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public isEdit: boolean;
  public displayedColumns: string[] = ['placa', 'modelo', 'gama', 'valor', 'selected'];
  public dataSource = null;
  public listaProductos: Observable<Producto[]>;
  
  constructor(protected productoService: ProductoService,
    // public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.consultar();
  }

  public consultar() {
    this.dataSource = this.productoService.consultar();

  }

  public eliminar(data) {
    console.log(data);

    this.productoService.eliminar(data).subscribe(() => {
      this.consultar();
    });
  }

  public openDialog() {
  
  }
}

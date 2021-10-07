import { Component, OnInit } from '@angular/core';
import { ProductoService } from '@producto/shared/service/producto.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogRentarComponent } from '../dialog-rentar/dialog-rentar.component';
import { SweetAlertService } from '@shared/service/sweet-alert.service';
import { Producto } from '@producto/shared/model/producto';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.sass']
})
export class ListarProductoComponent implements OnInit {
  public isEdit: boolean;
  public idData: string;
  public displayedColumns: string[] = ['placa', 'modelo', 'gama', 'valor', 'estado', 'selected'];
  public dataSource: Observable<Producto[]>;
  constructor(
    protected productoService: ProductoService,
    private readonly router: Router,
    public dialog: MatDialog,
    public alertService: SweetAlertService
  ) { }

  ngOnInit() {
    this.consultar();
  }

  public consultar() {
    this.dataSource = this.productoService.consultar();
  }

  public eliminar(data) {
    this.productoService.eliminar(data).subscribe(() => {
      this.consultar();
      this.alertService.alertDeleteSucces();
    });
  }

  public editar(idCarro) {
    this.router.navigateByUrl(`/producto/editar/${idCarro}`);
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogRentarComponent, {
      width: '700px',
      data: { name: this.idData }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.idData = result;
    });

  }
}

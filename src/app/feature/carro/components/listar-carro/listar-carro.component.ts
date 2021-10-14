import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SweetAlertService } from '@shared/service/sweet-alert.service';
import { Observable } from 'rxjs';
import { Carro } from '../../shared/model/carro';
import { CarroService } from '../../shared/service/carro.service';
import { DialogRentarComponent } from '../dialog-rentar/dialog-rentar.component';

@Component({
  selector: 'app-listar-carro',
  templateUrl: './listar-carro.component.html',
  styleUrls: ['./listar-carro.component.sass']
})
export class ListarCarroComponent implements OnInit {
  public isEdit: boolean;
  public idData: string;
  public displayedColumns: string[] = ['placa', 'modelo', 'gama', 'valor', 'estado', 'selected'];
  public dataSource: Observable<Carro[]>;
  constructor(
    protected carroService: CarroService,
    private readonly router: Router,
    public dialog: MatDialog,
    public alertService: SweetAlertService
  ) { }

  ngOnInit() {
    this.consultar();
  }

  public consultar() {
    this.dataSource = this.carroService.consultar();
  }

  public eliminar(data) {
    this.carroService.eliminar(data).subscribe(() => {
      this.consultar();
      this.alertService.alertDeleteSucces();
    });
  }

  public editar(idCarro): void {
    this.router.navigate([`/carro/editar/${idCarro}`]);
  }

  public openDialog(data): void {
    console.log(data);
    
    const dialogRef = this.dialog.open(DialogRentarComponent, {
      width: '700px',
      data
    });

    dialogRef.afterClosed().subscribe((result) => this.rentarCarro({ ...data, ...result }));
  }

  public rentarCarro(data) {
    data.estado = !(data.fechaInicial && data.fechaFinal);
    this.carroService.editar(data);
  }
}

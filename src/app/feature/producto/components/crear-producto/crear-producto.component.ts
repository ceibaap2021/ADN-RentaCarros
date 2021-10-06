import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '@shared/service/sweet-alert.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.sass']
})
export class CrearProductoComponent implements OnInit {
  public productoForm: FormGroup;
  public isEdit: boolean;
  public idCarro: string;

  constructor(
    protected productoServices: ProductoService,
    private readonly router: Router,
    public readonly activatedRoute: ActivatedRoute,
    protected readonly alertService: SweetAlertService) { }

  ngOnInit() {
    this.construirFormularioProducto();
    this.idCarro = this.activatedRoute.snapshot.params?.id || null;
    this.isEdit = !!this.idCarro;

    if (this.isEdit) {
      this.obtenerCarroId(this.idCarro);
    }
  }

  async guardar() {
    if (this.productoForm.valid) {
      try {
        if (this.isEdit) {
          await this.productoServices.editar(this.productoForm.value);
          this.alertService.alertEditSucces();
        }

        if (!this.isEdit) {
          await this.productoServices.guardar(this.productoForm.value);
          this.alertService.alertCreateSucces();
        }

        this.router.navigateByUrl('/producto/listar');
      } catch { }
    }
  }

  get tituloFormulario() {
    return !this.isEdit ? 'crear' : 'editar';
  }

  public async obtenerCarroId(idCarro) {
    try {
      const result = await this.productoServices.consultarIdCarro(idCarro);
      this.setFormCarro(result);
    } catch { }

  }

  public setFormCarro(result) {
    this.productoForm.patchValue({
      gama: result.gama,
      modelo: result.modelo,
      id: result.id,
      placa: result.placa,
      valor: result.valor,
      estado: result.estado,
    });
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      placa: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      gama: new FormControl('', [Validators.required]),
      estado: new FormControl(),
      fechaInicial: new FormControl(''),
      fechaFinal: new FormControl(''),
    });
  }

  showMessegeError(controlName: string): boolean {
    return (
      this.productoForm.get(controlName).invalid && this.productoForm.get(controlName).touched
    );
  }

  messegeError(control: string): string {
    return `El campo ${control}, es requerido.`;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '@shared/service/sweet-alert.service';
import { CarroService } from '../../shared/service/carro.service';

@Component({
  selector: 'app-crear-carro',
  templateUrl: './crear-carro.component.html',
  styleUrls: ['./crear-carro.component.sass']
})
export class CrearCarroComponent implements OnInit {
  public carroForm: FormGroup;
  public isEdit: boolean;
  public idCarro: string;

  constructor(
    protected carroServices: CarroService,
    private readonly router: Router,
    public readonly activarRoute: ActivatedRoute,
    protected readonly alertaServicio: SweetAlertService) { }

  ngOnInit() {
    this.construirFormulario();
    this.idCarro = this.activarRoute.snapshot.params?.id || null;
    this.isEdit = !!this.idCarro;

    if (this.isEdit) {
      this.obtenerCarroId(this.idCarro);
    }
  }

  async guardar() {
    if (this.carroForm.valid) {
      try {
        if (this.isEdit) {
          await this.carroServices.editar(this.carroForm.value);
          this.alertaServicio.alertEditSucces();
        }

        if (!this.isEdit) {
          await this.carroServices.guardar(this.carroForm.value);
          this.alertaServicio.alertCreateSucces();
        }

        this.router.navigateByUrl('/carro/listar');
      } catch { }
    }
  }

  get tituloFormulario() {
    return !this.isEdit ? 'crear' : 'editar';
  }

  public async obtenerCarroId(idCarro) {
    try {
      const result = await this.carroServices.consultarIdCarro(idCarro);
      this.setFormCarro(result);
    } catch { }

  }

  public setFormCarro(result) {
    this.carroForm.patchValue({
      gama: result.gama,
      modelo: result.modelo,
      id: result.id,
      placa: result.placa,
      valor: result.valor,
      estado: result.estado,
    });
  }

  public construirFormulario() {
    this.carroForm = new FormGroup({
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
      this.carroForm.get(controlName).invalid && this.carroForm.get(controlName).touched
    );
  }

  messegeError(control: string): string {
    return `El campo ${control}, es requerido.`;
  }
}

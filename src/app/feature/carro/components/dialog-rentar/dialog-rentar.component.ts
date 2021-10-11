import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Carro } from '../../shared/model/carro';

@Component({
  selector: 'app-dialog-rentar',
  templateUrl: './dialog-rentar.component.html',
  styleUrls: ['./dialog-rentar.component.sass']
})
export class DialogRentarComponent implements OnInit {
  public today = new Date();
  public numeroDias = 0;
  public carroForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Carro,
    public dialogRef: MatDialogRef<DialogRentarComponent>
  ) { }

  ngOnInit(): void {
    this.construirFormulario();
  }
  public construirFormulario() {
    this.carroForm = new FormGroup({
      fechaInicial: new FormControl(Validators.required),
      fechaFinal: new FormControl(Validators.required),
    });
  }

  public get valorRenta() {
    const { fechaInicial, fechaFinal } = this.carroForm.value;

    if (!fechaFinal) {
      return 0;
    }
    const num1=1000;
    const num2=1000;
    const num3=1000;
    const diffTime = fechaFinal?.getTime?.() - fechaInicial?.getTime?.();
    this.numeroDias = diffTime / (num1 * num2 * num2 * num3);

    return this.numeroDias * Number(this.data.valor);
  }
}

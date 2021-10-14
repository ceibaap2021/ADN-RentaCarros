import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { CarroService } from '../../shared/service/carro.service';

import { CrearCarroComponent } from './crear-carro.component';

describe('CrearCarroComponent', () => {
  let component: CrearCarroComponent;
  let fixture: ComponentFixture<CrearCarroComponent>;
  let carroService: CarroService;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CrearCarroComponent],
      imports: [
        HttpClientTestingModule,
        CommonModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
      ],
      providers: [CarroService, HttpService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCarroComponent);
    component = fixture.componentInstance;

    carroService = TestBed.inject(CarroService);
    spyOn(carroService, 'guardar').and.returnValue(
      of(true).toPromise()
    );
    fixture.detectChanges();
  });

  it('formulario es invalido cuando esta vacio', () => {
    component.carroForm.get('id').setValue('');
    component.carroForm.get('placa').setValue('');
    component.carroForm.get('valor').setValue('');
    component.carroForm.get('modelo').setValue('');
    component.carroForm.get('gama').setValue('');
    component.carroForm.get('estado').setValue('');

    component.guardar();

    expect(component.carroForm.valid).toBeFalsy();
  });

  it('Registrando carro', () => {
    component.carroForm.get('id').setValue('005');
    component.carroForm.get('placa').setValue('carro test');
    component.carroForm.get('valor').setValue('carro test');
    component.carroForm.get('modelo').setValue('carro test');
    component.carroForm.get('gama').setValue('Alta');
    component.carroForm.get('estado').setValue(true);

    component.guardar();

    expect(component.carroForm.valid).toBeTruthy();
  });

  it('Mensaje de error', () => {
    const control = 'destino';
    expect(component.messegeError(control)).toEqual('El campo destino, es requerido.');
  });

  it('validar variable isEdit', () => {
    let data: boolean = component.isEdit;
    expect(data).toBeFalsy();
  });

  it('Debe llenar el metodo change', async () => {
    const data = { estado: true, fechaFinal: "", fechaInicial: "", gama: "ALTA", id: "005021", modelo: "s", placa: "s", valor: 25, };
    const spyRedirecionar = spyOn(component, 'change').withArgs(data).and.callThrough();

    component.change(data);

    expect(spyRedirecionar).toHaveBeenCalled();
  });
});

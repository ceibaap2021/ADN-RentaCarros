import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { Carro } from '@carro/shared/model/carro';
import { CarroService } from '@carro/shared/service/carro.service';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

import { ListarCarroComponent } from './listar-carro.component';

describe('ListarCarroComponent', () => {
  let component: ListarCarroComponent;
  let fixture: ComponentFixture<ListarCarroComponent>;
  let carroService: CarroService;

  const dataSource: Carro[] = [new Carro('1', 'carro 1', 'carro 1', 'carro 1', 'carro 1', false), new Carro('2', 'carro 2', 'carro 1', 'carro 1', 'carro 1', false)];
  const dataCarros = { id: 1, placa: 2, modelo: 3, gama: 4, valor: 5, estado: true };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarCarroComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule
      ],
      providers: [CarroService, HttpService, MatDialog]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCarroComponent);
    component = fixture.componentInstance;
    carroService = TestBed.inject(CarroService);
    spyOn(carroService, 'consultar').and.returnValue(
      of(dataSource)
    );
    fixture.detectChanges();
  });

  it('Valida tamano de la tablas', () => {
    expect(component).toBeTruthy();
    component.dataSource.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });


  it('Eliminar carro', async () => {
    const spyRedirect = spyOn(carroService, 'eliminar').and.callThrough();
    component.eliminar(dataCarros);
    fixture.detectChanges();
    expect(spyRedirect).toHaveBeenCalled();
  });
});
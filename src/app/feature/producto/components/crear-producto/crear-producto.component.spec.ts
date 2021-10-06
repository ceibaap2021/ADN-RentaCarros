import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearProductoComponent } from './crear-producto.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductoService } from '../../shared/service/producto.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrearProductoComponent', () => {
  let component: CrearProductoComponent;
  let fixture: ComponentFixture<CrearProductoComponent>;
  let productoService: ProductoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProductoComponent ],
      imports: [
        HttpClientTestingModule,
        CommonModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ProductoService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProductoComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'guardar').and.returnValue(
      of(true).toPromise()
    );
    fixture.detectChanges();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.productoForm.valid).toBeFalsy();
  });

  it('Registrando producto', () => {
    expect(component.productoForm.valid).toBeFalsy();
    component.productoForm.get('id').setValue('005');
    component.productoForm.get('placa').setValue('Producto test');
    component.productoForm.get('valor').setValue('Producto test');
    component.productoForm.get('modelo').setValue('Producto test');
    component.productoForm.get('gama').setValue('Alta');
    component.productoForm.get('estado').setValue(true);
    expect(component.productoForm.valid).toBeTruthy();

    component.guardar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});

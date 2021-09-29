import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarProductoComponent } from './listar-producto.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductoService } from '../../shared/service/producto.service';
import { Producto } from '../../shared/model/producto';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListarProductoComponent', () => {
  let component: ListarProductoComponent;
  let fixture: ComponentFixture<ListarProductoComponent>;
  let productoService: ProductoService;
  const dataSource: Producto[] = [new Producto('1', 'Producto 1', 'Producto 1', 'Producto 1', 'Producto 1'), new Producto('2', 'Producto 2', 'Producto 1', 'Producto 1', 'Producto 1')];
  const dummyIdTransfer = {
    "id": 1,
    "placa": 2,
    "modelo": 3,
    "gama": 4,
    "valor": 5
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProductoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ProductoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductoComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'consultar').and.returnValue(
      of(dataSource)
    );
    fixture.detectChanges();
  });

  it('debe crear', () => {
    expect(component).toBeTruthy();
    component.dataSource.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });

  it('Eliminar producto', async () => {
    const spyRedirect = spyOn(productoService, 'eliminar').and.callThrough();
    component.eliminar(dummyIdTransfer);
    fixture.detectChanges();
    expect(spyRedirect).toHaveBeenCalled();
  });
});

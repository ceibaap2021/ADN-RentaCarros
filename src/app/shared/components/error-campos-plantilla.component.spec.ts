import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorCamposPlantillaComponent } from './error-campos-plantilla.component';

describe('ErrorCamposPlantillaComponent', () => {
  let component: ErrorCamposPlantillaComponent;
  let fixture: ComponentFixture<ErrorCamposPlantillaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorCamposPlantillaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCamposPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe mostrar el mensaje', () => {
    component.text = 'Error en el campo';
    expect(component.ocultar).toBeFalse();
  });
});

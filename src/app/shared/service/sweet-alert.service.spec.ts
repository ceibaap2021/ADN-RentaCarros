import { TestBed } from '@angular/core/testing';

import { SweetAlertService } from './sweet-alert.service';

describe('SweetAlertService', () => {
  let service: SweetAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Mostrar sweetalert Exitoso', () => {
    const spynToastSucces = spyOn(service, 'alertCreateSucces').and.callThrough();
    service.alertCreateSucces();
    expect(spynToastSucces).toHaveBeenCalled();
  });
  it('Mostrar sweetalert Exitoso', () => {
    const spynToastSucces = spyOn(service, 'alertEditSucces').and.callThrough();
    service.alertEditSucces();
    expect(spynToastSucces).toHaveBeenCalled();
  });

  it('Mostrar sweetalert Eliminado exitoso', () => {
    const spynToastDeleteSucces = spyOn(service, 'alertDeleteSucces').and.callThrough();
    service.alertDeleteSucces();
    expect(spynToastDeleteSucces).toHaveBeenCalled();
  });
});

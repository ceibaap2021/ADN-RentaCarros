import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from '@env/environment';
import { Carro } from '../model/carro';

import { CarroService } from './carro.service';

describe('CarroService', () => {
  let service: CarroService;
  let httpMock: HttpTestingController;

  const apiEndpointCarrosConsulta = `${environment.endpoint}/carro`;
  const apiEndpointCarros = `${environment.endpoint}/carro`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarroService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CarroService);
  });

  it('should be created', () => {
    const carroService: CarroService = TestBed.inject(CarroService);
    expect(carroService).toBeTruthy();
  });

  it('deberia listar carros', () => {
    const carros = [
      new Carro('1', 'Carro 1', 'Carro 1', 'Carro 1', 'Carro 1', true), new Carro('2', 'Carro 2', 'Carro 1', 'Carro 1', 'Carro 1', true)
    ];
    service.consultar().subscribe(dataCarros => {
      expect(dataCarros.length).toBe(2);
      expect(dataCarros).toEqual(dataCarros);
    });
    const req = httpMock.expectOne(apiEndpointCarrosConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(carros);
  });

  it('consultarIdCarro', () => {
    const idCarro = 221;

    const result = service.consultarIdCarro(idCarro);

    expect(result).toEqual(result);
  })
  it('editarCarro', () => {
    const idCarro = new Carro('1', 'Carro 1', 'Carro 1', 'Carro 1', 'Carro 1', true);

    const result = service.editar(idCarro);

    expect(result).toEqual(result);
  })

  it('deberia crear un carro', () => {

    const carros = new Carro('1121', '1121', '1121', '1121', '1121', true);

    const result = service.editar(carros);

    expect(result).toEqual(result);
  });

  it('deberia eliminar un carro', () => {
    const carros = new Carro('1121', '1121', '1121', '1121', '1121', true);
    service.eliminar(carros).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointCarros}/1121`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});

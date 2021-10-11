import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ManejadorError } from './manejador-error';

describe(`AuthHttpInterceptor`, () => {
    let manejador: ManejadorError;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        manejador = new ManejadorError();
    });

    it('should  call mensajePorDefecto and imprimirErrorConsola', () => {
        const spyMensajePorDefecto = spyOn(manejador as any, 'mensajePorDefecto').and.callThrough();
        const spyImprimirErrorConsola = spyOn(manejador as any, 'imprimirErrorConsola').and.callThrough();
        manejador.handleError(null);
        expect(spyMensajePorDefecto).toHaveBeenCalled();
        expect(spyImprimirErrorConsola).toHaveBeenCalled();
    });

    it('sould return the same error if no instance on HttpErrorResponseFound', () => {
        const error = 'error de prueba';
        const response = (manejador as any).mensajePorDefecto(error);
        expect(response).toEqual('error de prueba');
    });

    it('sould return message "Lo sentimos, no se detecta conexión a internet" on navigator.online === false', () => {
        spyOnProperty(Navigator.prototype, 'onLine').and.returnValue(false);
        const error = new HttpErrorResponse({});
        const response = (manejador as any).mensajePorDefecto(error);
        expect(response).toEqual('Lo sentimos, no se detecta conexión a internet');
    });

    it('should call obtenerErrorHttpCode if error has own propertie status and not message', () => {
        const spyObtenerErrorHttpCode = spyOn(manejador as any, 'obtenerErrorHttpCode').and.callThrough();
        const error = new HttpErrorResponse({
            status: 450,
            error: {}
        });
        (manejador as any).mensajePorDefecto(error);
        expect(spyObtenerErrorHttpCode).toHaveBeenCalled();
    });
});
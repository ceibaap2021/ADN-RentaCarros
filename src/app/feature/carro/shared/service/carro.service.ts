import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Carro } from '../model/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Carro[]>(`${environment.endpoint}/carro`, this.http.optsName('consultar carro'));
  }

  public consultarIdCarro(id: number) {
    return this.http.doGet<Carro[]>(`${environment.endpoint}/carro/${id}`, this.http.optsName('consultar carro')).toPromise();
  }

  public guardar(carro: Carro) {
    return this.http.doPost<Carro, boolean>(`${environment.endpoint}/carro`, carro,
      this.http.optsName('crear carro')).toPromise();
  }
  public editar(carro: Carro) {
    return this.http.doPut<Carro, boolean>(`${environment.endpoint}/carro/${carro.id}`, carro,
      this.http.optsName('actualizar carro')).toPromise();
  }

  public eliminar(carro: Carro) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/carro/${carro.id}`,
      this.http.optsName('eliminar carro'));
  }
}

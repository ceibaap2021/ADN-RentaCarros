import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';


@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Producto[]>(`${environment.endpoint}/carro`, this.http.optsName('consultar carro'));
  }
  public consultarIdCarro(id: number) {
    return this.http.doGet<Producto[]>(`${environment.endpoint}/carro/${id}`, this.http.optsName('consultar carro')).toPromise();
  }

  public guardar(producto: Producto) {
    return this.http.doPost<Producto, boolean>(`${environment.endpoint}/carro`, producto,
      this.http.optsName('crear carro')).toPromise();
  }
  public editar(producto: Producto) {
    return this.http.doPut<Producto, boolean>(`${environment.endpoint}/carro/${producto.id}`, producto,
      this.http.optsName('actualizar carro')).toPromise();
  }

  public eliminar(producto: Producto) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/carro/${producto.id}`,
      this.http.optsName('eliminar carro'));
  }
}

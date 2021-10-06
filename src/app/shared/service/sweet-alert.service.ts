import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  public alertCreateSucces() {
    return Swal.fire({
      title: 'Exitoso',
      text: 'Tu carro ha sido creado con exito',
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'Ok'
    });
  }
  public alertEditSucces() {
    return Swal.fire({
      title: 'Exitoso',
      text: 'Tu carro ha sido actualizado con exito',
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'Ok'
    });
  }

  public alertDeleteSucces() {
    return Swal.fire({
      title: 'Exitoso',
      text: 'Tu carro ha sido eliminado.',
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'Ok'
    });
  }
}

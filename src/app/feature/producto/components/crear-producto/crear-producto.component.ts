import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.sass']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  async crear() {
    console.log(this.productoForm.value);
    
   this.productoServices.guardar(this.productoForm.value);
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      placa: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      gama: new FormControl('', [Validators.required])
    });
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from '@producto/shared/model/producto';

@Component({
  selector: 'app-dialog-rentar',
  templateUrl: './dialog-rentar.component.html',
  styleUrls: ['./dialog-rentar.component.sass']
})
export class DialogRentarComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public data: Producto;
  constructor(

  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  public enviar(){
    console.log('hola');
    
  }
}

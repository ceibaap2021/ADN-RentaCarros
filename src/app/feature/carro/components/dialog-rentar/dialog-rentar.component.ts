import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Carro } from '../../shared/model/carro';

@Component({
  selector: 'app-dialog-rentar',
  templateUrl: './dialog-rentar.component.html',
  styleUrls: ['./dialog-rentar.component.sass']
})
export class DialogRentarComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public data: Carro;
  constructor() { }

  ngOnInit(): void {
  }

}

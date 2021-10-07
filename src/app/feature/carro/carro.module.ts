import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CarroComponent } from './components/carro/carro.component';
import { CrearCarroComponent } from './components/crear-carro/crear-carro.component';
import { DialogRentarComponent } from './components/dialog-rentar/dialog-rentar.component';
import { ListarCarroComponent } from './components/listar-carro/listar-carro.component';
import { CarroRoutingModule } from './carro-routing.module';
import { CarroService } from './shared/service/carro.service';


@NgModule({
  declarations: [
    CrearCarroComponent,
    ListarCarroComponent,
    CarroComponent,
    DialogRentarComponent
  ],
  imports: [
    CommonModule,
    CarroRoutingModule,
    SharedModule
  ],
  providers: [CarroService],
  exports: [DialogRentarComponent]
})
export class CarroModule { }

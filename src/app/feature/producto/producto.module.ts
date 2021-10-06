import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SharedModule } from '@shared/shared.module';
import { ProductoService } from './shared/service/producto.service';
import { DialogRentarComponent } from './components/dialog-rentar/dialog-rentar.component';


@NgModule({
  declarations: [
    CrearProductoComponent,
    ListarProductoComponent,
    ProductoComponent,
    DialogRentarComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    SharedModule
  ],
  providers: [ProductoService],
  exports: [DialogRentarComponent]
})
export class ProductoModule { }

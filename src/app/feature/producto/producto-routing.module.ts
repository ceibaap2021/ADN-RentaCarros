import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';


const routes: Routes = [
  {
    path: 'listar',
    component: ListarProductoComponent,
  },
  {
    path: 'crear',
    component: CrearProductoComponent
  },
  {
    path: 'editar/:id',
    component: CrearProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCarroComponent } from './components/crear-carro/crear-carro.component';
import { ListarCarroComponent } from './components/listar-carro/listar-carro.component';

const routes: Routes = [
    {
      path: 'listar',
      component: ListarCarroComponent,
    },
    {
      path: 'crear',
      component: CrearCarroComponent
    },
    {
      path: 'editar/:id',
      component: CrearCarroComponent
    }
  ];

  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CarroRoutingModule {}
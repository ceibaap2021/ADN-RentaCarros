import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityGuard } from './guard/security.guard';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpService } from './services/http.service';
import { RouterModule } from '@angular/router';
import { ManejadorError } from './interceptor/manejador-error';

@NgModule({
  declarations: [ToolbarComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ToolbarComponent, NavbarComponent],
  providers: [
    HttpService,
    SecurityGuard,
    { provide: ErrorHandler, useClass: ManejadorError },
  ]
})
export class CoreModule { }

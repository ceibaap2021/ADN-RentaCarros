import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpService } from './services/http.service';
import { RouterModule } from '@angular/router';
import { ManejadorError } from './interceptor/manejador-error';
import { SecurityGuard } from './guard/security.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { TokenInterceptor } from './interceptor/token-interceptor';

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
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: ErrorHandler, useClass: ManejadorError }
  ]
})
export class CoreModule { }

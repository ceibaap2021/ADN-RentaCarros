import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CarroService } from '@carro/shared/service/carro.service';
import { HttpService } from '@core/services/http.service';

import { DialogRentarComponent } from './dialog-rentar.component';

describe('DialogRentarComponent', () => {
  let fixture: ComponentFixture<DialogRentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogRentarComponent],
      imports: [
        HttpClientTestingModule,
        CommonModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatDialogModule
      ],
      providers: [CarroService, HttpService, MatDialog, MAT_DIALOG_DATA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRentarComponent);
    fixture.detectChanges();

  });

  // fit('should have as numeroDias', () => {
  //   const fixture = TestBed.createComponent(DialogRentarComponent);
  //   const app = fixture.debugElement.componentInstance;

  //   expect(app.numeroDias).toEqual(0);
  // })
});

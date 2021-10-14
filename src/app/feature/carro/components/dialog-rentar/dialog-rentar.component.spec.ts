import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {   MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogRentarComponent } from './dialog-rentar.component';

describe('DialogRentarComponent', () => {
  let component: DialogRentarComponent;
  let fixture: ComponentFixture<DialogRentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogRentarComponent],
      imports: [
        HttpClientTestingModule,
        CommonModule,
        RouterTestingModule,
        FormsModule,
        // MatFormFieldModule,
        // MatInputModule,
        // MatDialogModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should have as numeroDias', () => {
    expect(component).toBeTruthy();
  })

});

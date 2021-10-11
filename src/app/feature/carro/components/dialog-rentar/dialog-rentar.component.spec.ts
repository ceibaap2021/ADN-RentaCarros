import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRentarComponent } from './dialog-rentar.component';

describe('DialogRentarComponent', () => {
  let fixture: ComponentFixture<DialogRentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRentarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRentarComponent);
    fixture.detectChanges();
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentalControlComponent } from './parental-control.component';

describe('ParentalControlComponent', () => {
  let component: ParentalControlComponent;
  let fixture: ComponentFixture<ParentalControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentalControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentalControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

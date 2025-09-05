import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpSettingComponent } from './help-setting.component';

describe('HelpSettingComponent', () => {
  let component: HelpSettingComponent;
  let fixture: ComponentFixture<HelpSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

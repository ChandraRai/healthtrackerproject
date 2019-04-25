import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTipsComponent } from './patient-tips.component';

describe('PatientTipsComponent', () => {
  let component: PatientTipsComponent;
  let fixture: ComponentFixture<PatientTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientClinicAddComponent } from './patient-clinic-add.component';

describe('PatientClinicAddComponent', () => {
  let component: PatientClinicAddComponent;
  let fixture: ComponentFixture<PatientClinicAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientClinicAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientClinicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

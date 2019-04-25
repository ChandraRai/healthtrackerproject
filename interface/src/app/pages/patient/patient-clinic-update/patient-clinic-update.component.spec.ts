import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientClinicUpdateComponent } from './patient-clinic-update.component';

describe('PatientClinicUpdateComponent', () => {
  let component: PatientClinicUpdateComponent;
  let fixture: ComponentFixture<PatientClinicUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientClinicUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientClinicUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

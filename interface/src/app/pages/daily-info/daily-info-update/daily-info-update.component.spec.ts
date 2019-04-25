import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyInfoUpdateComponent } from './daily-info-update.component';

describe('DailyInfoUpdateComponent', () => {
  let component: DailyInfoUpdateComponent;
  let fixture: ComponentFixture<DailyInfoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyInfoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyInfoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

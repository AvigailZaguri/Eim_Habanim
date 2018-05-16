import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTreatmentComponent } from './find-treatment.component';

describe('FindTreatmentComponent', () => {
  let component: FindTreatmentComponent;
  let fixture: ComponentFixture<FindTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

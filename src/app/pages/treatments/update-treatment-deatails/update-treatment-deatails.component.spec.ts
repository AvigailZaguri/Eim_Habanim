import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTreatmentDeatailsComponent } from './update-treatment-deatails.component';

describe('UpdateTreatmentDeatailsComponent', () => {
  let component: UpdateTreatmentDeatailsComponent;
  let fixture: ComponentFixture<UpdateTreatmentDeatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTreatmentDeatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTreatmentDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

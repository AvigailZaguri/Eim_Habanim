import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMentoringRequestDetailsComponent } from './update-mentoring-request-details.component';

describe('UpdateMentoringRequestDetailsComponent', () => {
  let component: UpdateMentoringRequestDetailsComponent;
  let fixture: ComponentFixture<UpdateMentoringRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMentoringRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMentoringRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

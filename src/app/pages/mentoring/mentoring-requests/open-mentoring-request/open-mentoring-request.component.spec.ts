import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMentoringRequestComponent } from './open-mentoring-request.component';

describe('OpenMentoringRequestComponent', () => {
  let component: OpenMentoringRequestComponent;
  let fixture: ComponentFixture<OpenMentoringRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenMentoringRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenMentoringRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

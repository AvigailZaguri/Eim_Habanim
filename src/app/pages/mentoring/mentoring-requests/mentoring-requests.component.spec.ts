import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringRequestsComponent } from './mentoring-requests.component';

describe('MentoringRequestsComponent', () => {
  let component: MentoringRequestsComponent;
  let fixture: ComponentFixture<MentoringRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoringRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

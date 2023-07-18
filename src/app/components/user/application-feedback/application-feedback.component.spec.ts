import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFeedbackComponent } from './application-feedback.component';

describe('ApplicationFeedbackComponent', () => {
  let component: ApplicationFeedbackComponent;
  let fixture: ComponentFixture<ApplicationFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationFeedbackComponent]
    });
    fixture = TestBed.createComponent(ApplicationFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

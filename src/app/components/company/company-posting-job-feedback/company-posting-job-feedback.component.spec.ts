import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPostingJobFeedbackComponent } from './company-posting-job-feedback.component';

describe('CompanyPostingJobFeedbackComponent', () => {
  let component: CompanyPostingJobFeedbackComponent;
  let fixture: ComponentFixture<CompanyPostingJobFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyPostingJobFeedbackComponent]
    });
    fixture = TestBed.createComponent(CompanyPostingJobFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

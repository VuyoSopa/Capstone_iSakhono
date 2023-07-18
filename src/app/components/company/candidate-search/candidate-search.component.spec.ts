import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSearchComponent } from './candidate-search.component';

describe('CandidateSearchComponent', () => {
  let component: CandidateSearchComponent;
  let fixture: ComponentFixture<CandidateSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateSearchComponent]
    });
    fixture = TestBed.createComponent(CandidateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

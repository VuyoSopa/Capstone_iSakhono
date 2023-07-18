import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBottomNavbarComponent } from './company-bottom-navbar.component';

describe('CompanyBottomNavbarComponent', () => {
  let component: CompanyBottomNavbarComponent;
  let fixture: ComponentFixture<CompanyBottomNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyBottomNavbarComponent]
    });
    fixture = TestBed.createComponent(CompanyBottomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PostjobAuthService } from './postjob.auth.service';

describe('PostjobAuthService', () => {
  let service: PostjobAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostjobAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

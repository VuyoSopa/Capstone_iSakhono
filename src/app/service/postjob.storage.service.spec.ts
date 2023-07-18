import { TestBed } from '@angular/core/testing';

import { PostjobStorageService } from './postjob.storage.service';

describe('PostjobStorageService', () => {
  let service: PostjobStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostjobStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

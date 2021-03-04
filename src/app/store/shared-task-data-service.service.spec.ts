import { TestBed } from '@angular/core/testing';

import { SharedTaskDataServiceService } from './shared-task-data-service.service';

describe('SharedTaskDataServiceService', () => {
  let service: SharedTaskDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedTaskDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

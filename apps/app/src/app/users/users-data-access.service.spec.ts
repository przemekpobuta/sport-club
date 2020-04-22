import { TestBed } from '@angular/core/testing';

import { UsersDataAccessService } from './users-data-access.service';

describe('UsersDataAccessService', () => {
  let service: UsersDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

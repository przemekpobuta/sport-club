import { TestBed } from '@angular/core/testing';

import { TeamsDataAccessService } from './teams-data-access.service';

describe('TeamsDataAccessService', () => {
  let service: TeamsDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

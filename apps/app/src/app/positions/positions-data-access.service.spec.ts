import { TestBed } from '@angular/core/testing';

import { PositionsDataAccessService } from './positions-data-access.service';

describe('PositionsDataAccessService', () => {
  let service: PositionsDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositionsDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

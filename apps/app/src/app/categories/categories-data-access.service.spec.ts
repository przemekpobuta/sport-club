import { TestBed } from '@angular/core/testing';

import { CategoriesDataAccessService } from './categories-data-access.service';

describe('CategoriesDataAccessService', () => {
  let service: CategoriesDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

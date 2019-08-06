import { TestBed } from '@angular/core/testing';

import { CatogeryServiceService } from './catogery-service.service';

describe('CatogeryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatogeryServiceService = TestBed.get(CatogeryServiceService);
    expect(service).toBeTruthy();
  });
});

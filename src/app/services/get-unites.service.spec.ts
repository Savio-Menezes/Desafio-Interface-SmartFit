import { TestBed } from '@angular/core/testing';

import { GetUnitesService } from './get-unites.service';

describe('GetUnitesService', () => {
  let service: GetUnitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUnitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

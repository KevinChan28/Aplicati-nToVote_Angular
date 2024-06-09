import { TestBed } from '@angular/core/testing';

import { CurpValidationService } from './curp-validation.service';

describe('CurpValidationService', () => {
  let service: CurpValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurpValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

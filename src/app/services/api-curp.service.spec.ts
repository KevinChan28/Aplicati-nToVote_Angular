import { TestBed } from '@angular/core/testing';

import { ApiCurpService } from './api-curp.service';

describe('ApiCurpService', () => {
  let service: ApiCurpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCurpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

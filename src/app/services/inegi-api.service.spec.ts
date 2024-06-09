import { TestBed } from '@angular/core/testing';

import { InegiApiService } from './inegi-api.service';

describe('InegiApiService', () => {
  let service: InegiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InegiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BackconfigurationService } from './backconfiguration.service';

describe('BackconfigurationService', () => {
  let service: BackconfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackconfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

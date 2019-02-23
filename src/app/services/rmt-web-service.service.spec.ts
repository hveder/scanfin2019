import { TestBed } from '@angular/core/testing';

import { RmtWebServiceService } from './rmt-web-service.service';

describe('RmtWebServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RmtWebServiceService = TestBed.get(RmtWebServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AwsOcRServiceService } from './aws-oc-rservice.service';

describe('AwsOcRServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwsOcRServiceService = TestBed.get(AwsOcRServiceService);
    expect(service).toBeTruthy();
  });
});

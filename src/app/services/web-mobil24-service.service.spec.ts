import { TestBed } from '@angular/core/testing';

import { WebMobil24ServiceService } from './web-mobil24-service.service';

describe('WebMobil24ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebMobil24ServiceService = TestBed.get(WebMobil24ServiceService);
    expect(service).toBeTruthy();
  });
});

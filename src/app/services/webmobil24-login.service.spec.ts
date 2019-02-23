import { TestBed } from '@angular/core/testing';

import { Webmobil24LoginService } from './webmobil24-login.service';

describe('Webmobil24LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Webmobil24LoginService = TestBed.get(Webmobil24LoginService);
    expect(service).toBeTruthy();
  });
});

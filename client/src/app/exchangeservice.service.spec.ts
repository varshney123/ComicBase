import { TestBed, inject } from '@angular/core/testing';

import { ExchangeserviceService } from './exchangeservice.service';

describe('ExchangeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeserviceService]
    });
  });

  it('should ...', inject([ExchangeserviceService], (service: ExchangeserviceService) => {
    expect(service).toBeTruthy();
  }));
});

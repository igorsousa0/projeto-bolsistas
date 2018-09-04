import { TestBed, inject } from '@angular/core/testing';

import { BolsistaspageService } from './bolsistaspage.service';

describe('BolsistaspageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BolsistaspageService]
    });
  });

  it('should be created', inject([BolsistaspageService], (service: BolsistaspageService) => {
    expect(service).toBeTruthy();
  }));
});

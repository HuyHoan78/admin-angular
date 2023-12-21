import { TestBed } from '@angular/core/testing';

import { LoaispService } from './loaisp.service';

describe('LoaispService', () => {
  let service: LoaispService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaispService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

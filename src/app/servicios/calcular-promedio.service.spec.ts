import { TestBed } from '@angular/core/testing';

import { CalcularPromedioService } from './calcular-promedio.service';

describe('CalcularPromedioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcularPromedioService = TestBed.get(CalcularPromedioService);
    expect(service).toBeTruthy();
  });
});

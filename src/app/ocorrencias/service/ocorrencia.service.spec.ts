import { TestBed } from '@angular/core/testing';

import { OcorrenciaService } from './ocorrencia.service';

describe('OcorrenciaService', () => {
  let service: OcorrenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcorrenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

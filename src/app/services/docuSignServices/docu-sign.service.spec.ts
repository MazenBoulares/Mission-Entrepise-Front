import { TestBed } from '@angular/core/testing';

import { DocuSignService } from './docu-sign.service';

describe('DocuSignService', () => {
  let service: DocuSignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocuSignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

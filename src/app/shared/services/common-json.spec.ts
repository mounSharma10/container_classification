import { TestBed } from '@angular/core/testing';

import { CommonJson } from './common-json';

describe('CommonJson', () => {
  let service: CommonJson;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonJson);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

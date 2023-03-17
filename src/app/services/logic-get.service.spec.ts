import { TestBed } from '@angular/core/testing';

import { LogicGetService } from './logic-get.service';

describe('LogicGetService', () => {
  let service: LogicGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

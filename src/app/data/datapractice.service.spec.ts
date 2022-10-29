import { TestBed } from '@angular/core/testing';

import { DatapracticeService } from './datapractice.service';

describe('DatapracticeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatapracticeService = TestBed.get(DatapracticeService);
    expect(service).toBeTruthy();
  });
});

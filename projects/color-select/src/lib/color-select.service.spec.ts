import { TestBed } from '@angular/core/testing';

import { ColorSelectService } from './color-select.service';

describe('ColorSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorSelectService = TestBed.get(ColorSelectService);
    expect(service).toBeTruthy();
  });
});

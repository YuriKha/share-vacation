import { TestBed } from '@angular/core/testing';

import { AddVacationService } from './add-vacation.service';

describe('AddVacationService', () => {
  let service: AddVacationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddVacationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

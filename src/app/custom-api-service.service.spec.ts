import { TestBed } from '@angular/core/testing';
import { CustomApiServiceService } from './custom-api-service.service';

describe('CustomApiServiceService', () => {
  let service: CustomApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

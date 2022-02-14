import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApiCallService } from './api-call.service';
const { HttpClient } = jest.requireActual('@angular/common/http');

describe('ApiCallService', () => {
  let service: ApiCallService;
  let httpClinet: typeof HttpClient;

  beforeEach(() => {
    httpClinet = {
      ...HttpClient,
      get: jest.fn().mockReturnValue(of({ photos: { photo: [] } })),
    };
    service = new ApiCallService(httpClinet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

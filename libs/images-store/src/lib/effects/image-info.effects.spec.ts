import * as fromImageInfo from './../actions/image-info.actions';
import { Observable, of } from 'rxjs';
import { cold, hot } from 'jest-marbles';
import { Action } from '@ngrx/store';
import { ImageInfoEffects } from './image-info.effects';
import { IMAGE_API_CALL_RESPONSE_MOCK } from './../mocks';
import { HttpErrorResponse } from '@angular/common/http';

const { ApiCallService } = jest.requireActual('../services/api-call.service');
const { Store } = jest.requireActual('@ngrx/store');

describe('ImageInfo Reducer', () => {
  let mockEffects: ImageInfoEffects;
  let mockActions$: Observable<Action>;
  let mockApiCallService: typeof ApiCallService;
  let mockStore: typeof Store;

  beforeEach(() => {
    mockApiCallService = {
      ...ApiCallService,
      getDataFromServer: jest.fn(),
    };

    mockStore = {
      ...Store,
      select: jest.fn().mockReturnValue(of(1)),
    };

    mockActions$ = hot('-a', {
      a: fromImageInfo.loadImagesByTag,
    });

    mockEffects = new ImageInfoEffects(
      mockActions$,
      mockApiCallService,
      mockStore
    );
  });

  it('should be created', () => {
    expect(mockEffects).toBeTruthy();
  });

  describe('loadImages', () => {
    beforeEach(() => {
      mockActions$ = hot('-a', {
        a: fromImageInfo.loadImagesByTag,
      });

      mockEffects = new ImageInfoEffects(
        mockActions$,
        mockApiCallService,
        mockStore
      );
    });

    it('should dispatch loadImagesByTagSuccess', () => {
      mockApiCallService.getDataFromServer.mockReturnValue(
        of(IMAGE_API_CALL_RESPONSE_MOCK)
      );

      const expected$ = cold('-a-', {
        a: fromImageInfo.loadImagesByTagSuccess({
          rawImageList: IMAGE_API_CALL_RESPONSE_MOCK.photos.photo,
        }),
      });

      expect(mockEffects.loadImages$).toBeObservable(expected$);
    });

    it('should dispatch loadImagesByTagFailure', () => {
      const errorMock = new HttpErrorResponse({ status: 500 });
      const errorRepospne = cold('(-#|)', undefined, errorMock);
      mockApiCallService.getDataFromServer.mockReturnValue(errorRepospne);

      const expected$ = hot('-a-', {
        a: fromImageInfo.loadImagesByTagFailure({ error: errorMock }),
      });

      expect(mockEffects.loadImages$).toBeObservable(expected$);
    });
  });
});

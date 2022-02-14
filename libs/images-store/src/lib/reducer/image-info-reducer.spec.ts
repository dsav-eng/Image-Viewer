import * as fromImageInfo from './../actions/image-info.actions';
import { initialState, reducer, State } from './image-info.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { IMAGES_MOCK, RAW_IMAGE_MOCK } from '../mocks';

describe('ImageInfo Reducer', () => {
  describe('loadImagesByTag', () => {
    it('shoudl update $loadImageDetails', () => {
      const action = fromImageInfo.loadImagesByTag({ tag: '' });
      const state: State = reducer(initialState, action);

      expect(state.$loadImageDetails.isLoading).toBe(true);
      expect(state.$loadImageDetails.isLoadingSuccess).toBe(false);
      expect(state.$loadImageDetails.error).toBeNull();
    });
  });

  describe('loadImagesByTagSuccess', () => {
    it('shoudl update $loadImageDetails', () => {
      const mockInitial = {
        ...initialState,
        images: [IMAGES_MOCK[0]],
        numberOfLoads: 2,
      };

      const expectedImages = [
        IMAGES_MOCK[0],
        {
          imgLink: 'https://live.staticflickr.com/server1/id1_secret1_w.jpg',
        },
        {
          imgLink: 'https://live.staticflickr.com/server2/id2_secret2_w.jpg',
        },
      ];

      const action = fromImageInfo.loadImagesByTagSuccess({
        rawImageList: RAW_IMAGE_MOCK,
      });
      const state: State = reducer(mockInitial, action);

      expect(state.images).toEqual(expectedImages);
      expect(state.numberOfLoads).toBe(3);
      expect(state.$loadImageDetails.isLoading).toBe(false);
      expect(state.$loadImageDetails.isLoadingSuccess).toBe(true);
      expect(state.$loadImageDetails.error).toBeNull();
    });
  });

  describe('loadImagesByTagFailure', () => {
    it('shoudl update $loadImageDetails', () => {
      const mockError = new HttpErrorResponse({ status: 500 });
      const action = fromImageInfo.loadImagesByTagFailure({ error: mockError });
      const state: State = reducer(initialState, action);

      expect(state.$loadImageDetails.isLoading).toBe(false);
      expect(state.$loadImageDetails.isLoadingSuccess).toBe(false);
      expect(state.$loadImageDetails.error).toEqual(mockError);
    });
  });
});

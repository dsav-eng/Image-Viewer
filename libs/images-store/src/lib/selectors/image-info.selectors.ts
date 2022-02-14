import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromImageInfo from '../reducer/image-info.reducer';

export const selectImageInfoState = createFeatureSelector<fromImageInfo.State>(
  fromImageInfo.imageInfoFeatureKey
);

const getIsLoadImagesByTagLoading = createSelector(
  selectImageInfoState,
  (state) => state.$loadImageDetails.isLoading
);

const getIsLoadImagesByTagError = createSelector(
  selectImageInfoState,
  (state) => state.$loadImageDetails.error
);

const getImages = createSelector(selectImageInfoState, (state) => state.images);

const getNumberOfLoads = createSelector(
  selectImageInfoState,
  (state) => state.numberOfLoads
);

export const imageInfoSelector = {
  getImages,
  getIsLoadImagesByTagLoading,
  getIsLoadImagesByTagError,
  getNumberOfLoads,
};

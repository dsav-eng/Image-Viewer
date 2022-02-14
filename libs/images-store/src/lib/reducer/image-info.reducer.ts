import { createReducer, on } from '@ngrx/store';
import { ApiCallState, ImageSpec } from '../model';
import * as ImageInfoActions from '../actions/image-info.actions';
import { cloneDeep } from 'lodash';
import * as util from './../utils';

export const imageInfoFeatureKey = 'imageInfo';

export interface State {
  images: ImageSpec[];
  numberOfLoads: number;
  $loadImageDetails: ApiCallState;
}

export const initialState: State = {
  images: [],
  numberOfLoads: 0,
  $loadImageDetails: {
    isLoading: false,
    isLoadingSuccess: false,
    error: null,
  },
};

export const reducer = createReducer(
  initialState,

  on(ImageInfoActions.loadImagesByTag, (state) => {
    return {
      ...state,
      $loadImageDetails: {
        isLoading: true,
        isLoadingSuccess: false,
        error: null,
      },
    };
  }),

  on(ImageInfoActions.loadImagesByTagSuccess, (state, { rawImageList }) => {
    const newNumberOfLoads = state.numberOfLoads + 1;
    const newImages = cloneDeep(state.images);
    rawImageList.forEach((rawImage) => {
      newImages.push(util.buildImageObj(rawImage));
    });
    return {
      ...state,
      images: newImages,
      numberOfLoads: newNumberOfLoads,
      $loadImageDetails: {
        isLoading: false,
        isLoadingSuccess: true,
        error: null,
      },
    };
  }),

  on(ImageInfoActions.loadImagesByTagFailure, (state, { error }) => {
    return {
      ...state,
      $loadImageDetails: {
        isLoading: false,
        isLoadingSuccess: false,
        error: error,
      },
    };
  })
);

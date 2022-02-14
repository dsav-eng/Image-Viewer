import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { ImageSpec, RawImageSpec } from '../model';

export const loadImagesByTag = createAction(
  '[ImageInfo] Load Images By Tag',
  props<{ tag: string }>()
);

export const loadImagesByTagSuccess = createAction(
  '[ImageInfo] Load Images By Tag Success',
  props<{ rawImageList: RawImageSpec[] }>()
);

export const loadImagesByTagFailure = createAction(
  '[ImageInfo] Load Images By Tag Failure',
  props<{ error: HttpErrorResponse }>()
);

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ImageInfoActions from '../actions/image-info.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { ImageApiCallResponse } from '../model';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import * as util from './../utils';
import { ApiCallService } from '../services/api-call.service';
import { Store } from '@ngrx/store';
import { State } from '../reducer/image-info.reducer';
import { imageInfoSelector } from '../selectors/image-info.selectors';

@Injectable()
export class ImageInfoEffects {
  loadImages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ImageInfoActions.loadImagesByTag),
      withLatestFrom(this.store.select(imageInfoSelector.getNumberOfLoads)),
      switchMap(([{ tag }, num]) => {
        return this.apiCallService
          .getDataFromServer(util.getApiEndPoint(tag, num))
          .pipe(
            map((response: ImageApiCallResponse) => {
              return ImageInfoActions.loadImagesByTagSuccess({
                rawImageList: response.photos.photo,
              });
            }),
            catchError((error: HttpErrorResponse) => {
              return of(ImageInfoActions.loadImagesByTagFailure({ error }));
            })
          );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private apiCallService: ApiCallService,
    private store: Store<State>
  ) {}
}

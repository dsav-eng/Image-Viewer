import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducer/image-info.reducer';
import * as ImageInfoActions from '../actions/image-info.actions';
import { Observable } from 'rxjs';
import { imageInfoSelector } from '../selectors/image-info.selectors';
import { ImageSpec } from '../model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ImageInfoFacade {
  constructor(private store: Store<State>) {}

  loadImagesByTag(tag: string): void {
    this.store.dispatch(ImageInfoActions.loadImagesByTag({ tag: tag }));
  }

  getImages$: Observable<ImageSpec[]> = this.store.select(
    imageInfoSelector.getImages
  );

  getIsLoadImagesByTagLoading$: Observable<boolean> = this.store.select(
    imageInfoSelector.getIsLoadImagesByTagLoading
  );

  getIsLoadImagesByTagError$: Observable<HttpErrorResponse | null | undefined> =
    this.store.select(imageInfoSelector.getIsLoadImagesByTagError);

  getNumberOfLoads$: Observable<number> = this.store.select(
    imageInfoSelector.getNumberOfLoads
  );
}

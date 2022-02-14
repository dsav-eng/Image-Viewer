import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromImageInfo from './reducer/image-info.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ImageInfoEffects } from './effects/image-info.effects';
import { ImageInfoFacade } from './facade/image-info.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromImageInfo.imageInfoFeatureKey,
      fromImageInfo.reducer
    ),
    EffectsModule.forFeature([ImageInfoEffects]),
  ],
  providers: [ImageInfoFacade],
})
export class ImagesStoreModule {}

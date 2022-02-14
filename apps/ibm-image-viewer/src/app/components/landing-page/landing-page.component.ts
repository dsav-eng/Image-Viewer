import { Component, OnInit } from '@angular/core';
import { ImageInfoFacade } from '@image-viewer/images-store';
import { ImageCategoryEnum } from '../../constants';

@Component({
  selector: 'image-viewer-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  getNumberOfLoads$ = this.imagesInfofacade.getNumberOfLoads$;
  MAX_LIMIT = 5;
  constructor(private imagesInfofacade: ImageInfoFacade) {}

  loadMoreImages(): void {
    this.imagesInfofacade.loadImagesByTag(ImageCategoryEnum.FERRARI);
  }
}

import { Component, OnInit } from '@angular/core';
import { ImageInfoFacade, ImageSpec } from '@image-viewer/images-store';
import { Observable } from 'rxjs';
import { ImageCategoryEnum } from '../../../constants';

@Component({
  selector: 'image-viewer-images-container',
  templateUrl: './images-container.component.html',
  styleUrls: ['./images-container.component.scss'],
})
export class ImagesContainerComponent implements OnInit {
  images$: Observable<ImageSpec[]> = this.imagesInfofacade.getImages$;
  isLoading$: Observable<boolean> =
    this.imagesInfofacade.getIsLoadImagesByTagLoading$;

  constructor(private imagesInfofacade: ImageInfoFacade) {}

  ngOnInit(): void {
    this.imagesInfofacade.loadImagesByTag(ImageCategoryEnum.FERRARI);
  }
}

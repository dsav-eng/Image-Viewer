import { Component, OnInit } from '@angular/core';
import { ImageInfoFacade } from '@image-viewer/images-store';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'image-viewer-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private translocoService: TranslocoService) {}

  toggleActiveLanguage(): void {
    this.translocoService.getActiveLang() === 'en'
      ? this.translocoService.setActiveLang('fr')
      : this.translocoService.setActiveLang('en');
  }
}

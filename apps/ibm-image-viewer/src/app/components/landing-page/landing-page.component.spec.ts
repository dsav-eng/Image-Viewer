import { of } from 'rxjs';
import { ImageCategoryEnum } from '../../constants';
import { LandingPageComponent } from './landing-page.component';
const { ImageInfoFacade } = jest.requireActual('@image-viewer/images-store');

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let imagesInfofacade: typeof ImageInfoFacade;

  beforeEach(() => {
    imagesInfofacade = {
      ...ImageInfoFacade,
      loadImagesByTag: jest.fn(),
      images$: of({}),
      isLoading$: of(true),
    };
    component = new LandingPageComponent(imagesInfofacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loadMoreImages', () => {
    it('should call loadImagesByTag', () => {
      const mockTag = ImageCategoryEnum.FERRARI;

      component.loadMoreImages();

      expect(imagesInfofacade.loadImagesByTag).toHaveBeenCalledWith(mockTag);
    });
  });
});

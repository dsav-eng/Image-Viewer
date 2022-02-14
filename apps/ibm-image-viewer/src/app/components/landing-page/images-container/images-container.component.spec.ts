import { of } from 'rxjs';
import { ImageCategoryEnum } from '../../../constants';
import { ImagesContainerComponent } from './images-container.component';
const { ImageInfoFacade } = jest.requireActual('@image-viewer/images-store');

describe('ImagesContainerComponent', () => {
  let component: ImagesContainerComponent;
  let imagesInfofacade: typeof ImageInfoFacade;

  beforeEach(() => {
    imagesInfofacade = {
      ...ImageInfoFacade,
      loadImagesByTag: jest.fn(),
      images$: of({}),
      isLoading$: of(true),
    };

    component = new ImagesContainerComponent(imagesInfofacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call loadImagesByTag', () => {
      const mockTag = ImageCategoryEnum.FERRARI;
      component.ngOnInit();

      expect(imagesInfofacade.loadImagesByTag).toHaveBeenCalledWith(mockTag);
    });
  });
});

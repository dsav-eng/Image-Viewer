import * as fromImageInfo from './../actions/image-info.actions';
import { ImageInfoFacade } from './image-info.facade';
const { Store } = jest.requireActual('@ngrx/store');

describe('ImageInfoFacade', () => {
  let mockFacade: ImageInfoFacade;
  let mockStore: typeof Store;

  beforeEach(() => {
    mockStore = {
      ...Store,
      select: jest.fn(),
      dispatch: jest.fn(),
    };

    mockFacade = new ImageInfoFacade(mockStore);
  });

  it('shoudl create', () => {
    expect(mockFacade).toBeTruthy();
  });
});

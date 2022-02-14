import * as fromImageInfo from '../reducer/image-info.reducer';
import { selectImageInfoState } from './image-info.selectors';

describe('ImageInfo Select0rs', () => {
  it('shoudl create', () => {
    const result = selectImageInfoState({
      [fromImageInfo.imageInfoFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});

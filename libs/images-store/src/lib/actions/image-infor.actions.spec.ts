import * as fromImageInfo from './image-info.actions';

describe('should dispatch specific actions for the image-info store', () => {
  it('imageInfoActions', () => {
    expect(fromImageInfo.loadImagesByTag({ tag: '' }).type).toBe(
      '[ImageInfo] Load Images By Tag'
    );

    expect(
      fromImageInfo.loadImagesByTagSuccess({ rawImageList: [] }).type
    ).toBe('[ImageInfo] Load Images By Tag Success');
  });
});

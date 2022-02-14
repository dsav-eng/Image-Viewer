import { ImageSpec, RawImageSpec } from './model';

export const getApiEndPoint = (tag: string, num: number): string => {
  return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a5e95177da353f58113fd60296e1d250&user_id=&tags=${tag}&license=2&group_id=&extras=description%2C+tags&per_page=10&page=${num}&format=json&nojsoncallback=1`;
};

export const buildImageObj = (imageObj: RawImageSpec): ImageSpec => {
  return {
    imgLink: `https://live.staticflickr.com/${imageObj.server}/${imageObj.id}_${imageObj.secret}_w.jpg`,
  };
};

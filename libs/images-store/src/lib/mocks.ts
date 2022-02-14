import { ImageApiCallResponse, ImageSpec, RawImageSpec } from './model';

export const RAW_IMAGE_MOCK: RawImageSpec[] = [
  { id: 'id1', secret: 'secret1', server: 'server1' },
  { id: 'id2', secret: 'secret2', server: 'server2' },
];

export const IMAGE_API_CALL_RESPONSE_MOCK: ImageApiCallResponse = {
  photos: {
    photo: RAW_IMAGE_MOCK,
  },
};

export const IMAGES_MOCK: ImageSpec[] = [
  { imgLink: 'imgLink1' },
  { imgLink: 'imgLink2' },
  { imgLink: 'imgLink3' },
  { imgLink: 'imgLink4' },
];

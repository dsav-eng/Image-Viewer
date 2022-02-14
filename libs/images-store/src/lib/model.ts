import { HttpErrorResponse } from '@angular/common/http';

export interface ApiCallState {
  isLoading: boolean;
  isLoadingSuccess: boolean;
  error?: HttpErrorResponse | null;
}

export interface ImageApiCallResponse {
  photos: {
    photo: RawImageSpec[];
  };
}

export interface RawImageSpec {
  id: string;
  secret: string;
  server: string;
  owner?: string;
  farm?: string;
  title?: string;
  isPublic?: number;
  isFriend?: number;
  isFamily?: number;
}

export interface ImageSpec {
  imgLink: string;
  id?: string;
}

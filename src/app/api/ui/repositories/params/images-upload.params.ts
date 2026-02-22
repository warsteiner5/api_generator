import { ImagesUpload$Params } from '../../../swagger/fn/images/images-upload';

// @ts-ignore
export interface ImagesUploadParams {
}

export function imagesUploadAdapter(params?: ImagesUploadParams): ImagesUpload$Params {
  if (!params) {
    return {} as ImagesUpload$Params;
  }
  return {
  };
}

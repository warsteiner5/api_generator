import { ImagesUpload$Params } from '../../../swagger/fn/images/images-upload';

export interface ImagesUploadParams {
}

export const imagesUploadParamsAdapter = {
  adapt(params?: ImagesUploadParams): ImagesUpload$Params {
    if (!params) {
      return {} as ImagesUpload$Params;
    }
    return {
    };
  }
};

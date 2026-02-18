import { ImagesCompressImages$Params } from '../../../swagger/fn/images/images-compress-images';

export interface ImagesCompressImagesParams {
  body?: number[];
}

export const imagesCompressImagesParamsAdapter = {
  adapt(params?: ImagesCompressImagesParams): ImagesCompressImages$Params {
    if (!params) {
      return {} as ImagesCompressImages$Params;
    }
    return {
      body: params.body,
    };
  }
};

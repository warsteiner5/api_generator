import { ImagesCompressImages$Params } from '../../../swagger/fn/images/images-compress-images';

// @ts-ignore
export interface ImagesCompressImagesParams {
  body?: number[];
}

export function imagesCompressImagesAdapter(params?: ImagesCompressImagesParams): ImagesCompressImages$Params {
  if (!params) {
    return {} as ImagesCompressImages$Params;
  }
  return {
      body: params.body,
  };
}

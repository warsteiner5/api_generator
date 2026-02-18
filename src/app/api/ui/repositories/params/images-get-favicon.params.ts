import { ImagesGetFavicon$Params } from '../../../swagger/fn/images/images-get-favicon';

export interface ImagesGetFaviconParams {
}

export const imagesGetFaviconParamsAdapter = {
  adapt(params?: ImagesGetFaviconParams): ImagesGetFavicon$Params {
    if (!params) {
      return {} as ImagesGetFavicon$Params;
    }
    return {
    };
  }
};

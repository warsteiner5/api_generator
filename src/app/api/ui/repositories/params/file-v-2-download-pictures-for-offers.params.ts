import { FileV2DownloadPicturesForOffers$Params } from '../../../swagger/fn/file-v-2/file-v-2-download-pictures-for-offers';

export interface FileV2DownloadPicturesForOffersParams {
}

export const fileV2DownloadPicturesForOffersParamsAdapter = {
  adapt(params?: FileV2DownloadPicturesForOffersParams): FileV2DownloadPicturesForOffers$Params {
    if (!params) {
      return {} as FileV2DownloadPicturesForOffers$Params;
    }
    return {
    };
  }
};

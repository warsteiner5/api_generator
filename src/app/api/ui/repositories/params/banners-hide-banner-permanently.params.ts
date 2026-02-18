import { BannerKeyEnum } from '../../enums/banner-key.enum';
import { BannersHideBannerPermanently$Params } from '../../../swagger/fn/banners/banners-hide-banner-permanently';
import { adaptApiBannerKeyEnum } from '../../adapters/toDto/api-banner-key-enum.adapter';

export interface BannersHideBannerPermanentlyParams {
  bannerKey: BannerKeyEnum;
}

export const bannersHideBannerPermanentlyParamsAdapter = {
  adapt(params?: BannersHideBannerPermanentlyParams): BannersHideBannerPermanently$Params {
    if (!params) {
      return {} as BannersHideBannerPermanently$Params;
    }
    return {
      bannerKey: adaptApiBannerKeyEnum(params.bannerKey),
    };
  }
};

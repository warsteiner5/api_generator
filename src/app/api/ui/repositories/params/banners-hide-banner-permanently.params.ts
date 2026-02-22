import { BannerKeyEnum } from '../../enums/banner-key.enum';
import { BannersHideBannerPermanently$Params } from '../../../swagger/fn/banners/banners-hide-banner-permanently';
import { apiBannerKeyEnumAdapter } from '../../adapters/enums/api-banner-key-enum.adapter';

// @ts-ignore
export interface BannersHideBannerPermanentlyParams {
  bannerKey: BannerKeyEnum;
}

export function bannersHideBannerPermanentlyAdapter(params?: BannersHideBannerPermanentlyParams): BannersHideBannerPermanently$Params {
  if (!params) {
    return {} as BannersHideBannerPermanently$Params;
  }
  return {
      bannerKey: apiBannerKeyEnumAdapter(params.bannerKey),
  };
}

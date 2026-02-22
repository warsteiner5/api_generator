import { BannerPlaceEnum } from '../../enums/banner-place.enum';
import { BannersGetBannerSettings$Params } from '../../../swagger/fn/banners/banners-get-banner-settings';
import { apiBannerPlaceEnumAdapter } from '../../adapters/enums/api-banner-place-enum.adapter';

// @ts-ignore
export interface BannersGetBannerSettingsParams {
  tenantId?: number;
  bannerPlace?: BannerPlaceEnum;
}

export function bannersGetBannerSettingsAdapter(params?: BannersGetBannerSettingsParams): BannersGetBannerSettings$Params {
  if (!params) {
    return {} as BannersGetBannerSettings$Params;
  }
  return {
      TenantId: params.tenantId,
      BannerPlace: apiBannerPlaceEnumAdapter(params.bannerPlace),
  };
}

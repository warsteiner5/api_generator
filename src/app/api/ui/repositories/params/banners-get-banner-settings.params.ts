import { BannerPlaceEnum } from '../../enums/banner-place.enum';
import { BannersGetBannerSettings$Params } from '../../../swagger/fn/banners/banners-get-banner-settings';
import { adaptApiBannerPlaceEnum } from '../../adapters/toDto/api-banner-place-enum.adapter';

export interface BannersGetBannerSettingsParams {
  tenantId?: number;
  bannerPlace?: BannerPlaceEnum;
}

export const bannersGetBannerSettingsParamsAdapter = {
  adapt(params?: BannersGetBannerSettingsParams): BannersGetBannerSettings$Params {
    if (!params) {
      return {} as BannersGetBannerSettings$Params;
    }
    return {
      TenantId: params.tenantId,
      BannerPlace: adaptApiBannerPlaceEnum(params.bannerPlace),
    };
  }
};

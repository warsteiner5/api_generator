import { BannersGetUserBanners$Params } from '../../../swagger/fn/banners/banners-get-user-banners';

export interface BannersGetUserBannersParams {
}

export const bannersGetUserBannersParamsAdapter = {
  adapt(params?: BannersGetUserBannersParams): BannersGetUserBanners$Params {
    if (!params) {
      return {} as BannersGetUserBanners$Params;
    }
    return {
    };
  }
};

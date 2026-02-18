import { FilterDisableBanner$Params } from '../../../swagger/fn/filter/filter-disable-banner';

export interface FilterDisableBannerParams {
}

export const filterDisableBannerParamsAdapter = {
  adapt(params?: FilterDisableBannerParams): FilterDisableBanner$Params {
    if (!params) {
      return {} as FilterDisableBanner$Params;
    }
    return {
    };
  }
};

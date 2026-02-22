import { FilterDisableBanner$Params } from '../../../swagger/fn/filter/filter-disable-banner';

// @ts-ignore
export interface FilterDisableBannerParams {
}

export function filterDisableBannerAdapter(params?: FilterDisableBannerParams): FilterDisableBanner$Params {
  if (!params) {
    return {} as FilterDisableBanner$Params;
  }
  return {
  };
}

import { FilterGetBannerActivity$Params } from '../../../swagger/fn/filter/filter-get-banner-activity';

export interface FilterGetBannerActivityParams {
}

export const filterGetBannerActivityParamsAdapter = {
  adapt(params?: FilterGetBannerActivityParams): FilterGetBannerActivity$Params {
    if (!params) {
      return {} as FilterGetBannerActivity$Params;
    }
    return {
    };
  }
};

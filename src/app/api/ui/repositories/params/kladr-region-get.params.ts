import { KladrRegionGet$Params } from '../../../swagger/fn/kladr-region/kladr-region-get';

export interface KladrRegionGetParams {
}

export const kladrRegionGetParamsAdapter = {
  adapt(params?: KladrRegionGetParams): KladrRegionGet$Params {
    if (!params) {
      return {} as KladrRegionGet$Params;
    }
    return {
    };
  }
};

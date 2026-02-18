import { RegionGet$Params } from '../../../swagger/fn/region/region-get';

export interface RegionGetParams {
}

export const regionGetParamsAdapter = {
  adapt(params?: RegionGetParams): RegionGet$Params {
    if (!params) {
      return {} as RegionGet$Params;
    }
    return {
    };
  }
};

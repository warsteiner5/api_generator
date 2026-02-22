import { RegionGet$Params } from '../../../swagger/fn/region/region-get';

// @ts-ignore
export interface RegionGetParams {
}

export function regionGetAdapter(params?: RegionGetParams): RegionGet$Params {
  if (!params) {
    return {} as RegionGet$Params;
  }
  return {
  };
}

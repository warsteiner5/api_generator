import { KladrRegionGet$Params } from '../../../swagger/fn/kladr-region/kladr-region-get';

// @ts-ignore
export interface KladrRegionGetParams {
}

export function kladrRegionGetAdapter(params?: KladrRegionGetParams): KladrRegionGet$Params {
  if (!params) {
    return {} as KladrRegionGet$Params;
  }
  return {
  };
}

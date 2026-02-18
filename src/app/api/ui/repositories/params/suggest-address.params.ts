import { SuggestAddress$Params } from '../../../swagger/fn/suggest/suggest-address';

export interface SuggestAddressParams {
}

export const suggestAddressParamsAdapter = {
  adapt(params?: SuggestAddressParams): SuggestAddress$Params {
    if (!params) {
      return {} as SuggestAddress$Params;
    }
    return {
    };
  }
};

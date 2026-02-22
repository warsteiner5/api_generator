import { SuggestAddress$Params } from '../../../swagger/fn/suggest/suggest-address';

// @ts-ignore
export interface SuggestAddressParams {
}

export function suggestAddressAdapter(params?: SuggestAddressParams): SuggestAddress$Params {
  if (!params) {
    return {} as SuggestAddress$Params;
  }
  return {
  };
}

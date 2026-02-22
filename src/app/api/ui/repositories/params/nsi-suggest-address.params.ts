import { NsiSuggestAddress$Params } from '../../../swagger/fn/nsi/nsi-suggest-address';

// @ts-ignore
export interface NsiSuggestAddressParams {
  query: string;
  country?: string;
}

export function nsiSuggestAddressAdapter(params?: NsiSuggestAddressParams): NsiSuggestAddress$Params {
  if (!params) {
    return {} as NsiSuggestAddress$Params;
  }
  return {
      query: params.query,
      country: params.country,
  };
}

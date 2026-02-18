import { NsiSuggestAddress$Params } from '../../../swagger/fn/nsi/nsi-suggest-address';

export interface NsiSuggestAddressParams {
  query: string;
  country?: string;
}

export const nsiSuggestAddressParamsAdapter = {
  adapt(params?: NsiSuggestAddressParams): NsiSuggestAddress$Params {
    if (!params) {
      return {} as NsiSuggestAddress$Params;
    }
    return {
      query: params.query,
      country: params.country,
    };
  }
};

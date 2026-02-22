import { NsiSearchCountry$Params } from '../../../swagger/fn/nsi/nsi-search-country';

// @ts-ignore
export interface NsiSearchCountryParams {
  query: string;
}

export function nsiSearchCountryAdapter(params?: NsiSearchCountryParams): NsiSearchCountry$Params {
  if (!params) {
    return {} as NsiSearchCountry$Params;
  }
  return {
      query: params.query,
  };
}

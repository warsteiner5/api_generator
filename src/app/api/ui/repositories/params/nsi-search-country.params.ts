import { NsiSearchCountry$Params } from '../../../swagger/fn/nsi/nsi-search-country';

export interface NsiSearchCountryParams {
  query: string;
}

export const nsiSearchCountryParamsAdapter = {
  adapt(params?: NsiSearchCountryParams): NsiSearchCountry$Params {
    if (!params) {
      return {} as NsiSearchCountry$Params;
    }
    return {
      query: params.query,
    };
  }
};

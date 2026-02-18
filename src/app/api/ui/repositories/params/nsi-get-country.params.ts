import { NsiGetCountry$Params } from '../../../swagger/fn/nsi/nsi-get-country';

export interface NsiGetCountryParams {
}

export const nsiGetCountryParamsAdapter = {
  adapt(params?: NsiGetCountryParams): NsiGetCountry$Params {
    if (!params) {
      return {} as NsiGetCountry$Params;
    }
    return {
    };
  }
};

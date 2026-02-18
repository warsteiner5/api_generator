import { NsiSuggestOrganization$Params } from '../../../swagger/fn/nsi/nsi-suggest-organization';

export interface NsiSuggestOrganizationParams {
  query: string;
}

export const nsiSuggestOrganizationParamsAdapter = {
  adapt(params?: NsiSuggestOrganizationParams): NsiSuggestOrganization$Params {
    if (!params) {
      return {} as NsiSuggestOrganization$Params;
    }
    return {
      query: params.query,
    };
  }
};

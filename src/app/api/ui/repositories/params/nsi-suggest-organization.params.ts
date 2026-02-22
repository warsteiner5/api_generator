import { NsiSuggestOrganization$Params } from '../../../swagger/fn/nsi/nsi-suggest-organization';

// @ts-ignore
export interface NsiSuggestOrganizationParams {
  query: string;
}

export function nsiSuggestOrganizationAdapter(params?: NsiSuggestOrganizationParams): NsiSuggestOrganization$Params {
  if (!params) {
    return {} as NsiSuggestOrganization$Params;
  }
  return {
      query: params.query,
  };
}

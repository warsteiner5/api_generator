import { ExternalDealFilterObjectAlt } from '../../models/external-deal-filter-object-alt.interface';
import { ExternalDealGetExternalDealsForAdmin$Params } from '../../../swagger/fn/external-deal/external-deal-get-external-deals-for-admin';
import { apiExternalDealFilterObjectAltDtoAdapter } from '../../adapters/models/api-external-deal-filter-object.adapter';

// @ts-ignore
export interface ExternalDealGetExternalDealsForAdminParams {
  body?: ExternalDealFilterObjectAlt;
}

export function externalDealGetExternalDealsForAdminAdapter(params?: ExternalDealGetExternalDealsForAdminParams): ExternalDealGetExternalDealsForAdmin$Params {
  if (!params) {
    return {} as ExternalDealGetExternalDealsForAdmin$Params;
  }
  return {
      body: apiExternalDealFilterObjectAltDtoAdapter(params.body),
  };
}

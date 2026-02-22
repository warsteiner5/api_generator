import { ExternalDealFilterObjectAlt } from '../../models/external-deal-filter-object-alt.interface';
import { ExternalDealGetExternalDeals$Params } from '../../../swagger/fn/external-deal/external-deal-get-external-deals';
import { apiExternalDealFilterObjectAltDtoAdapter } from '../../adapters/models/api-external-deal-filter-object.adapter';

// @ts-ignore
export interface ExternalDealGetExternalDealsParams {
  body?: ExternalDealFilterObjectAlt;
}

export function externalDealGetExternalDealsAdapter(params?: ExternalDealGetExternalDealsParams): ExternalDealGetExternalDeals$Params {
  if (!params) {
    return {} as ExternalDealGetExternalDeals$Params;
  }
  return {
      body: apiExternalDealFilterObjectAltDtoAdapter(params.body),
  };
}

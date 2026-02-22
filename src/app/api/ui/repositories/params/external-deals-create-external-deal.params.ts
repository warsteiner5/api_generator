import { ExternalDeal } from '../../models/external-deal.interface';
import { ExternalDealsCreateExternalDeal$Params } from '../../../swagger/fn/external-deals/external-deals-create-external-deal';
import { apiExternalDealDtoAdapter } from '../../adapters/models/api-external-deal-dto.adapter';

// @ts-ignore
export interface ExternalDealsCreateExternalDealParams {
  body?: ExternalDeal;
}

export function externalDealsCreateExternalDealAdapter(params?: ExternalDealsCreateExternalDealParams): ExternalDealsCreateExternalDeal$Params {
  if (!params) {
    return {} as ExternalDealsCreateExternalDeal$Params;
  }
  return {
      body: apiExternalDealDtoAdapter(params.body),
  };
}

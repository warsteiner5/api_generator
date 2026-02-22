import { ExternalDeal } from '../../models/external-deal.interface';
import { ExternalDealsReplace$Params } from '../../../swagger/fn/external-deals/external-deals-replace';
import { apiExternalDealDtoAdapter } from '../../adapters/models/api-external-deal-dto.adapter';

// @ts-ignore
export interface ExternalDealsReplaceParams {
  id: number;
  body?: ExternalDeal;
}

export function externalDealsReplaceAdapter(params?: ExternalDealsReplaceParams): ExternalDealsReplace$Params {
  if (!params) {
    return {} as ExternalDealsReplace$Params;
  }
  return {
      id: params.id,
      body: apiExternalDealDtoAdapter(params.body),
  };
}

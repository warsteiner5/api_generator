import { ExternalDeal } from '../../models/external-deal.interface';
import { ExternalDealsPublish$Params } from '../../../swagger/fn/external-deals/external-deals-publish';
import { apiExternalDealDtoAdapter } from '../../adapters/models/api-external-deal-dto.adapter';

// @ts-ignore
export interface ExternalDealsPublishParams {
  body?: ExternalDeal;
}

export function externalDealsPublishAdapter(params?: ExternalDealsPublishParams): ExternalDealsPublish$Params {
  if (!params) {
    return {} as ExternalDealsPublish$Params;
  }
  return {
      body: apiExternalDealDtoAdapter(params.body),
  };
}

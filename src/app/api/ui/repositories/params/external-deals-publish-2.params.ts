import { ExternalDeal } from '../../models/external-deal.interface';
import { ExternalDealsPublish2$Params } from '../../../swagger/fn/external-deals/external-deals-publish-2';
import { apiExternalDealDtoAdapter } from '../../adapters/models/api-external-deal-dto.adapter';

// @ts-ignore
export interface ExternalDealsPublish2Params {
  id: number;
  body?: ExternalDeal;
}

export function externalDealsPublish2Adapter(params?: ExternalDealsPublish2Params): ExternalDealsPublish2$Params {
  if (!params) {
    return {} as ExternalDealsPublish2$Params;
  }
  return {
      id: params.id,
      body: apiExternalDealDtoAdapter(params.body),
  };
}

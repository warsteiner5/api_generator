import { CreateDealDraftsRequest } from '../../models/create-deal-drafts-request.interface';
import { DealsCreateDeals$Params } from '../../../swagger/fn/deals/deals-create-deals';
import { apiCreateDealDraftsRequestDtoAdapter } from '../../adapters/models/api-create-deal-drafts-request-dto.adapter';

// @ts-ignore
export interface DealsCreateDealsParams {
  body?: CreateDealDraftsRequest;
}

export function dealsCreateDealsAdapter(params?: DealsCreateDealsParams): DealsCreateDeals$Params {
  if (!params) {
    return {} as DealsCreateDeals$Params;
  }
  return {
      body: apiCreateDealDraftsRequestDtoAdapter(params.body),
  };
}

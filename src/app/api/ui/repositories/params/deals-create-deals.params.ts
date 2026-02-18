import { CreateDealDraftsRequest } from '../../models/create-deal-drafts-request.interface';
import { DealsCreateDeals$Params } from '../../../swagger/fn/deals/deals-create-deals';
import { adaptApiCreateDealDraftsRequestDto } from '../../adapters/toDto/api-create-deal-drafts-request-dto.adapter';

export interface DealsCreateDealsParams {
  body?: CreateDealDraftsRequest;
}

export const dealsCreateDealsParamsAdapter = {
  adapt(params?: DealsCreateDealsParams): DealsCreateDeals$Params {
    if (!params) {
      return {} as DealsCreateDeals$Params;
    }
    return {
      body: adaptApiCreateDealDraftsRequestDto(params.body),
    };
  }
};

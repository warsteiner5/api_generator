import { CreateDealDraftsRequest } from '../../models/create-deal-drafts-request.interface';
import { DealsCreateDealsExternal$Params } from '../../../swagger/fn/deals/deals-create-deals-external';
import { adaptApiCreateDealDraftsRequestDto } from '../../adapters/toDto/api-create-deal-drafts-request-dto.adapter';

export interface DealsCreateDealsExternalParams {
  body?: CreateDealDraftsRequest;
}

export const dealsCreateDealsExternalParamsAdapter = {
  adapt(params?: DealsCreateDealsExternalParams): DealsCreateDealsExternal$Params {
    if (!params) {
      return {} as DealsCreateDealsExternal$Params;
    }
    return {
      body: adaptApiCreateDealDraftsRequestDto(params.body),
    };
  }
};

import { CreateDealDraftsRequest } from '../../models/create-deal-drafts-request.interface';
import { DealsCreateDealsExternal$Params } from '../../../swagger/fn/deals/deals-create-deals-external';
import { apiCreateDealDraftsRequestDtoAdapter } from '../../adapters/models/api-create-deal-drafts-request-dto.adapter';

// @ts-ignore
export interface DealsCreateDealsExternalParams {
  body?: CreateDealDraftsRequest;
}

export function dealsCreateDealsExternalAdapter(params?: DealsCreateDealsExternalParams): DealsCreateDealsExternal$Params {
  if (!params) {
    return {} as DealsCreateDealsExternal$Params;
  }
  return {
      body: apiCreateDealDraftsRequestDtoAdapter(params.body),
  };
}

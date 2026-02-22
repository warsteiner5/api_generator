import { CreateDealDraftByParticipantRequest } from '../../models/create-deal-draft-by-participant-request.interface';
import { DealsCreateDeal$Params } from '../../../swagger/fn/deals/deals-create-deal';
import { apiCreateDealDraftByParticipantRequestDtoAdapter } from '../../adapters/models/api-create-deal-draft-by-participant-request-dto.adapter';

// @ts-ignore
export interface DealsCreateDealParams {
  body?: CreateDealDraftByParticipantRequest;
}

export function dealsCreateDealAdapter(params?: DealsCreateDealParams): DealsCreateDeal$Params {
  if (!params) {
    return {} as DealsCreateDeal$Params;
  }
  return {
      body: apiCreateDealDraftByParticipantRequestDtoAdapter(params.body),
  };
}

import { CreateDealDraftByParticipantRequest } from '../../models/create-deal-draft-by-participant-request.interface';
import { DealsCreateDealInternal$Params } from '../../../swagger/fn/deals/deals-create-deal-internal';
import { apiCreateDealDraftByParticipantRequestDtoAdapter } from '../../adapters/models/api-create-deal-draft-by-participant-request-dto.adapter';

// @ts-ignore
export interface DealsCreateDealInternalParams {
  body?: CreateDealDraftByParticipantRequest;
}

export function dealsCreateDealInternalAdapter(params?: DealsCreateDealInternalParams): DealsCreateDealInternal$Params {
  if (!params) {
    return {} as DealsCreateDealInternal$Params;
  }
  return {
      body: apiCreateDealDraftByParticipantRequestDtoAdapter(params.body),
  };
}

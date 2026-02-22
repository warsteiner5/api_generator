import { CreateDealDraftByParticipantRequest } from '../../models/create-deal-draft-by-participant-request.interface';
import { DealsCreateDealExternal$Params } from '../../../swagger/fn/deals/deals-create-deal-external';
import { apiCreateDealDraftByParticipantRequestDtoAdapter } from '../../adapters/models/api-create-deal-draft-by-participant-request-dto.adapter';

// @ts-ignore
export interface DealsCreateDealExternalParams {
  body?: CreateDealDraftByParticipantRequest;
}

export function dealsCreateDealExternalAdapter(params?: DealsCreateDealExternalParams): DealsCreateDealExternal$Params {
  if (!params) {
    return {} as DealsCreateDealExternal$Params;
  }
  return {
      body: apiCreateDealDraftByParticipantRequestDtoAdapter(params.body),
  };
}

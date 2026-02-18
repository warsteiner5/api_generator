import { CreateDealDraftByParticipantRequest } from '../../models/create-deal-draft-by-participant-request.interface';
import { DealsCreateDealExternal$Params } from '../../../swagger/fn/deals/deals-create-deal-external';
import { adaptApiCreateDealDraftByParticipantRequestDto } from '../../adapters/toDto/api-create-deal-draft-by-participant-request-dto.adapter';

export interface DealsCreateDealExternalParams {
  body?: CreateDealDraftByParticipantRequest;
}

export const dealsCreateDealExternalParamsAdapter = {
  adapt(params?: DealsCreateDealExternalParams): DealsCreateDealExternal$Params {
    if (!params) {
      return {} as DealsCreateDealExternal$Params;
    }
    return {
      body: adaptApiCreateDealDraftByParticipantRequestDto(params.body),
    };
  }
};

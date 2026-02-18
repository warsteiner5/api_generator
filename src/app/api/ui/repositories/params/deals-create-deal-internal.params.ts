import { CreateDealDraftByParticipantRequest } from '../../models/create-deal-draft-by-participant-request.interface';
import { DealsCreateDealInternal$Params } from '../../../swagger/fn/deals/deals-create-deal-internal';
import { adaptApiCreateDealDraftByParticipantRequestDto } from '../../adapters/toDto/api-create-deal-draft-by-participant-request-dto.adapter';

export interface DealsCreateDealInternalParams {
  body?: CreateDealDraftByParticipantRequest;
}

export const dealsCreateDealInternalParamsAdapter = {
  adapt(params?: DealsCreateDealInternalParams): DealsCreateDealInternal$Params {
    if (!params) {
      return {} as DealsCreateDealInternal$Params;
    }
    return {
      body: adaptApiCreateDealDraftByParticipantRequestDto(params.body),
    };
  }
};

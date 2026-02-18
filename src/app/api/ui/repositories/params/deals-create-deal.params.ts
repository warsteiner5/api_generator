import { CreateDealDraftByParticipantRequest } from '../../models/create-deal-draft-by-participant-request.interface';
import { DealsCreateDeal$Params } from '../../../swagger/fn/deals/deals-create-deal';
import { adaptApiCreateDealDraftByParticipantRequestDto } from '../../adapters/toDto/api-create-deal-draft-by-participant-request-dto.adapter';

export interface DealsCreateDealParams {
  body?: CreateDealDraftByParticipantRequest;
}

export const dealsCreateDealParamsAdapter = {
  adapt(params?: DealsCreateDealParams): DealsCreateDeal$Params {
    if (!params) {
      return {} as DealsCreateDeal$Params;
    }
    return {
      body: adaptApiCreateDealDraftByParticipantRequestDto(params.body),
    };
  }
};

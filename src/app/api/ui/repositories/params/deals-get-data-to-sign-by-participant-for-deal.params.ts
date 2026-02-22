import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { DealsGetDataToSignByParticipantForDeal$Params } from '../../../swagger/fn/deals/deals-get-data-to-sign-by-participant-for-deal';
import { apiDealInfoRequestDtoAdapter } from '../../adapters/models/api-deal-info-request-dto.adapter';

// @ts-ignore
export interface DealsGetDataToSignByParticipantForDealParams {
  body?: DealInfoRequest;
}

export function dealsGetDataToSignByParticipantForDealAdapter(params?: DealsGetDataToSignByParticipantForDealParams): DealsGetDataToSignByParticipantForDeal$Params {
  if (!params) {
    return {} as DealsGetDataToSignByParticipantForDeal$Params;
  }
  return {
      body: apiDealInfoRequestDtoAdapter(params.body),
  };
}

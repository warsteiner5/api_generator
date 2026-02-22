import { DealGetDataToSignByParticipantForDeal$Params } from '../../../swagger/fn/deal/deal-get-data-to-sign-by-participant-for-deal';
import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { apiDealInfoRequestDtoAdapter } from '../../adapters/models/api-deal-info-request-dto.adapter';

// @ts-ignore
export interface DealGetDataToSignByParticipantForDealParams {
  body?: DealInfoRequest;
}

export function dealGetDataToSignByParticipantForDealAdapter(params?: DealGetDataToSignByParticipantForDealParams): DealGetDataToSignByParticipantForDeal$Params {
  if (!params) {
    return {} as DealGetDataToSignByParticipantForDeal$Params;
  }
  return {
      body: apiDealInfoRequestDtoAdapter(params.body),
  };
}

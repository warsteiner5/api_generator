import { DealGetDataToSignByParticipantForDeal$Params } from '../../../swagger/fn/deal/deal-get-data-to-sign-by-participant-for-deal';
import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { adaptApiDealInfoRequestDto } from '../../adapters/toDto/api-deal-info-request-dto.adapter';

export interface DealGetDataToSignByParticipantForDealParams {
  body?: DealInfoRequest;
}

export const dealGetDataToSignByParticipantForDealParamsAdapter = {
  adapt(params?: DealGetDataToSignByParticipantForDealParams): DealGetDataToSignByParticipantForDeal$Params {
    if (!params) {
      return {} as DealGetDataToSignByParticipantForDeal$Params;
    }
    return {
      body: adaptApiDealInfoRequestDto(params.body),
    };
  }
};

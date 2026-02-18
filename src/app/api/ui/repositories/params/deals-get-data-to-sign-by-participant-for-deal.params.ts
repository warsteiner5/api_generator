import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { DealsGetDataToSignByParticipantForDeal$Params } from '../../../swagger/fn/deals/deals-get-data-to-sign-by-participant-for-deal';
import { adaptApiDealInfoRequestDto } from '../../adapters/toDto/api-deal-info-request-dto.adapter';

export interface DealsGetDataToSignByParticipantForDealParams {
  body?: DealInfoRequest;
}

export const dealsGetDataToSignByParticipantForDealParamsAdapter = {
  adapt(params?: DealsGetDataToSignByParticipantForDealParams): DealsGetDataToSignByParticipantForDeal$Params {
    if (!params) {
      return {} as DealsGetDataToSignByParticipantForDeal$Params;
    }
    return {
      body: adaptApiDealInfoRequestDto(params.body),
    };
  }
};

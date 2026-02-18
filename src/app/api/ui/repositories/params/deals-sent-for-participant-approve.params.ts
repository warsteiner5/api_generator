import { DealsSentForParticipantApprove$Params } from '../../../swagger/fn/deals/deals-sent-for-participant-approve';
import { FullDeal } from '../../models/full-deal.interface';
import { adaptApiFullDealDto } from '../../adapters/toDto/api-full-deal-dto.adapter';

export interface DealsSentForParticipantApproveParams {
  body?: FullDeal;
}

export const dealsSentForParticipantApproveParamsAdapter = {
  adapt(params?: DealsSentForParticipantApproveParams): DealsSentForParticipantApprove$Params {
    if (!params) {
      return {} as DealsSentForParticipantApprove$Params;
    }
    return {
      body: adaptApiFullDealDto(params.body),
    };
  }
};

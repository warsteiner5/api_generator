import { DealSentForParticipantApprove$Params } from '../../../swagger/fn/deal/deal-sent-for-participant-approve';
import { FullDeal } from '../../models/full-deal.interface';
import { adaptApiFullDealDto } from '../../adapters/toDto/api-full-deal-dto.adapter';

export interface DealSentForParticipantApproveParams {
  body?: FullDeal;
}

export const dealSentForParticipantApproveParamsAdapter = {
  adapt(params?: DealSentForParticipantApproveParams): DealSentForParticipantApprove$Params {
    if (!params) {
      return {} as DealSentForParticipantApprove$Params;
    }
    return {
      body: adaptApiFullDealDto(params.body),
    };
  }
};

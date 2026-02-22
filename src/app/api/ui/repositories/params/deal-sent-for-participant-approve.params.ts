import { DealSentForParticipantApprove$Params } from '../../../swagger/fn/deal/deal-sent-for-participant-approve';
import { FullDeal } from '../../models/full-deal.interface';
import { apiFullDealDtoAdapter } from '../../adapters/models/api-full-deal-dto.adapter';

// @ts-ignore
export interface DealSentForParticipantApproveParams {
  body?: FullDeal;
}

export function dealSentForParticipantApproveAdapter(params?: DealSentForParticipantApproveParams): DealSentForParticipantApprove$Params {
  if (!params) {
    return {} as DealSentForParticipantApprove$Params;
  }
  return {
      body: apiFullDealDtoAdapter(params.body),
  };
}

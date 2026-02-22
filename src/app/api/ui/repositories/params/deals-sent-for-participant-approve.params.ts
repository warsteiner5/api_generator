import { DealsSentForParticipantApprove$Params } from '../../../swagger/fn/deals/deals-sent-for-participant-approve';
import { FullDeal } from '../../models/full-deal.interface';
import { apiFullDealDtoAdapter } from '../../adapters/models/api-full-deal-dto.adapter';

// @ts-ignore
export interface DealsSentForParticipantApproveParams {
  body?: FullDeal;
}

export function dealsSentForParticipantApproveAdapter(params?: DealsSentForParticipantApproveParams): DealsSentForParticipantApprove$Params {
  if (!params) {
    return {} as DealsSentForParticipantApprove$Params;
  }
  return {
      body: apiFullDealDtoAdapter(params.body),
  };
}

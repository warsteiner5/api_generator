import { DealsSentForParticipantApproveExternal$Params } from '../../../swagger/fn/deals/deals-sent-for-participant-approve-external';
import { FullDeal } from '../../models/full-deal.interface';
import { apiFullDealDtoAdapter } from '../../adapters/models/api-full-deal-dto.adapter';

// @ts-ignore
export interface DealsSentForParticipantApproveExternalParams {
  body?: FullDeal;
}

export function dealsSentForParticipantApproveExternalAdapter(params?: DealsSentForParticipantApproveExternalParams): DealsSentForParticipantApproveExternal$Params {
  if (!params) {
    return {} as DealsSentForParticipantApproveExternal$Params;
  }
  return {
      body: apiFullDealDtoAdapter(params.body),
  };
}

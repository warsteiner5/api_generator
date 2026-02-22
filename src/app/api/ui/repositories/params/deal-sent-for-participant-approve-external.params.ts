import { DealSentForParticipantApproveExternal$Params } from '../../../swagger/fn/deal/deal-sent-for-participant-approve-external';
import { FullDeal } from '../../models/full-deal.interface';
import { apiFullDealDtoAdapter } from '../../adapters/models/api-full-deal-dto.adapter';

// @ts-ignore
export interface DealSentForParticipantApproveExternalParams {
  body?: FullDeal;
}

export function dealSentForParticipantApproveExternalAdapter(params?: DealSentForParticipantApproveExternalParams): DealSentForParticipantApproveExternal$Params {
  if (!params) {
    return {} as DealSentForParticipantApproveExternal$Params;
  }
  return {
      body: apiFullDealDtoAdapter(params.body),
  };
}

import { DealSentForSignByParticipant$Params } from '../../../swagger/fn/deal/deal-sent-for-sign-by-participant';
import { FullDeal } from '../../models/full-deal.interface';
import { apiFullDealDtoAdapter } from '../../adapters/models/api-full-deal-dto.adapter';

// @ts-ignore
export interface DealSentForSignByParticipantParams {
  body?: FullDeal;
}

export function dealSentForSignByParticipantAdapter(params?: DealSentForSignByParticipantParams): DealSentForSignByParticipant$Params {
  if (!params) {
    return {} as DealSentForSignByParticipant$Params;
  }
  return {
      body: apiFullDealDtoAdapter(params.body),
  };
}

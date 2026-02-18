import { DealSentForSignByParticipant$Params } from '../../../swagger/fn/deal/deal-sent-for-sign-by-participant';
import { FullDeal } from '../../models/full-deal.interface';
import { adaptApiFullDealDto } from '../../adapters/toDto/api-full-deal-dto.adapter';

export interface DealSentForSignByParticipantParams {
  body?: FullDeal;
}

export const dealSentForSignByParticipantParamsAdapter = {
  adapt(params?: DealSentForSignByParticipantParams): DealSentForSignByParticipant$Params {
    if (!params) {
      return {} as DealSentForSignByParticipant$Params;
    }
    return {
      body: adaptApiFullDealDto(params.body),
    };
  }
};

import { DealSentForParticipantApproveExternal$Params } from '../../../swagger/fn/deal/deal-sent-for-participant-approve-external';
import { FullDeal } from '../../models/full-deal.interface';
import { adaptApiFullDealDto } from '../../adapters/toDto/api-full-deal-dto.adapter';

export interface DealSentForParticipantApproveExternalParams {
  body?: FullDeal;
}

export const dealSentForParticipantApproveExternalParamsAdapter = {
  adapt(params?: DealSentForParticipantApproveExternalParams): DealSentForParticipantApproveExternal$Params {
    if (!params) {
      return {} as DealSentForParticipantApproveExternal$Params;
    }
    return {
      body: adaptApiFullDealDto(params.body),
    };
  }
};

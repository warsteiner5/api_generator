import { DealsSentForParticipantApproveExternal$Params } from '../../../swagger/fn/deals/deals-sent-for-participant-approve-external';
import { FullDeal } from '../../models/full-deal.interface';
import { adaptApiFullDealDto } from '../../adapters/toDto/api-full-deal-dto.adapter';

export interface DealsSentForParticipantApproveExternalParams {
  body?: FullDeal;
}

export const dealsSentForParticipantApproveExternalParamsAdapter = {
  adapt(params?: DealsSentForParticipantApproveExternalParams): DealsSentForParticipantApproveExternal$Params {
    if (!params) {
      return {} as DealsSentForParticipantApproveExternal$Params;
    }
    return {
      body: adaptApiFullDealDto(params.body),
    };
  }
};

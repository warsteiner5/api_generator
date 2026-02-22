import { DealStateEnum } from '../../enums/deal-state.enum';
import { ApiDealStateEnum } from '../../../swagger/models/api-deal-state-enum';

export const apiDealStateEnumAdapter = (source?: DealStateEnum | null): ApiDealStateEnum => {
  switch (source) {
    case DealStateEnum.Draft:
      return ApiDealStateEnum.Draft;
    case DealStateEnum.SentForApprove:
      return ApiDealStateEnum.SentForApprove;
    case DealStateEnum.ApprovedByParticipant:
      return ApiDealStateEnum.ApprovedByParticipant;
    case DealStateEnum.Concluded:
      return ApiDealStateEnum.Concluded;
    case DealStateEnum.CustomerRefusedToSignDeal:
      return ApiDealStateEnum.CustomerRefusedToSignDeal;
    case DealStateEnum.ParticipantRefusedToSignDeal:
      return ApiDealStateEnum.ParticipantRefusedToSignDeal;
    case DealStateEnum.ParticipantSuggestedToSignPaperDeal:
      return ApiDealStateEnum.ParticipantSuggestedToSignPaperDeal;
    case DealStateEnum.Executed:
      return ApiDealStateEnum.Executed;
    case DealStateEnum.Terminate:
      return ApiDealStateEnum.Terminate;
    case DealStateEnum.SendToReworkByCustomer:
      return ApiDealStateEnum.SendToReworkByCustomer;
    case DealStateEnum.Canceled:
      return ApiDealStateEnum.Canceled;
    case DealStateEnum.CustomerSuggestedToSignPaperDeal:
      return ApiDealStateEnum.CustomerSuggestedToSignPaperDeal;
    case DealStateEnum.DifferenceProtocolSent:
      return ApiDealStateEnum.DifferenceProtocolSent;
    default:
      throw new Error(`Enum value is not defined: DealStateEnum=${String(source)}`);
  }
}

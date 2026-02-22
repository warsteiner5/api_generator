import { ApiDealStateEnum } from '../../../swagger/models/api-deal-state-enum';
import { DealStateEnum } from '../../enums/deal-state.enum';

export const dealStateEnumAdapter = (source?: ApiDealStateEnum | null): DealStateEnum => {
  switch (source) {
    case ApiDealStateEnum.Draft:
      return DealStateEnum.Draft;
    case ApiDealStateEnum.SentForApprove:
      return DealStateEnum.SentForApprove;
    case ApiDealStateEnum.ApprovedByParticipant:
      return DealStateEnum.ApprovedByParticipant;
    case ApiDealStateEnum.Concluded:
      return DealStateEnum.Concluded;
    case ApiDealStateEnum.CustomerRefusedToSignDeal:
      return DealStateEnum.CustomerRefusedToSignDeal;
    case ApiDealStateEnum.ParticipantRefusedToSignDeal:
      return DealStateEnum.ParticipantRefusedToSignDeal;
    case ApiDealStateEnum.ParticipantSuggestedToSignPaperDeal:
      return DealStateEnum.ParticipantSuggestedToSignPaperDeal;
    case ApiDealStateEnum.Executed:
      return DealStateEnum.Executed;
    case ApiDealStateEnum.Terminate:
      return DealStateEnum.Terminate;
    case ApiDealStateEnum.SendToReworkByCustomer:
      return DealStateEnum.SendToReworkByCustomer;
    case ApiDealStateEnum.Canceled:
      return DealStateEnum.Canceled;
    case ApiDealStateEnum.CustomerSuggestedToSignPaperDeal:
      return DealStateEnum.CustomerSuggestedToSignPaperDeal;
    case ApiDealStateEnum.DifferenceProtocolSent:
      return DealStateEnum.DifferenceProtocolSent;
    default:
      throw new Error(`Enum value is not defined: ApiDealStateEnum=${String(source)}`);
  }
}

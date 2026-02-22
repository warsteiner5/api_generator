import { ApiDealAgreementHistoryStateEnum } from '../../../swagger/models/api-deal-agreement-history-state-enum';
import { DealAgreementHistoryStateEnum } from '../../enums/deal-agreement-history-state.enum';

export const dealAgreementHistoryStateEnumAdapter = (source?: ApiDealAgreementHistoryStateEnum | null): DealAgreementHistoryStateEnum => {
  switch (source) {
    case ApiDealAgreementHistoryStateEnum.Unknown:
      return DealAgreementHistoryStateEnum.Unknown;
    case ApiDealAgreementHistoryStateEnum.Approved:
      return DealAgreementHistoryStateEnum.Approved;
    case ApiDealAgreementHistoryStateEnum.Rejected:
      return DealAgreementHistoryStateEnum.Rejected;
    case ApiDealAgreementHistoryStateEnum.InitialConditions:
      return DealAgreementHistoryStateEnum.InitialConditions;
    default:
      throw new Error(`Enum value is not defined: ApiDealAgreementHistoryStateEnum=${String(source)}`);
  }
}

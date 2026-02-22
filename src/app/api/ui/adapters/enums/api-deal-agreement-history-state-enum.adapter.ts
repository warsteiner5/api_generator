import { DealAgreementHistoryStateEnum } from '../../enums/deal-agreement-history-state.enum';
import { ApiDealAgreementHistoryStateEnum } from '../../../swagger/models/api-deal-agreement-history-state-enum';

export const apiDealAgreementHistoryStateEnumAdapter = (source?: DealAgreementHistoryStateEnum | null): ApiDealAgreementHistoryStateEnum => {
  switch (source) {
    case DealAgreementHistoryStateEnum.Unknown:
      return ApiDealAgreementHistoryStateEnum.Unknown;
    case DealAgreementHistoryStateEnum.Approved:
      return ApiDealAgreementHistoryStateEnum.Approved;
    case DealAgreementHistoryStateEnum.Rejected:
      return ApiDealAgreementHistoryStateEnum.Rejected;
    case DealAgreementHistoryStateEnum.InitialConditions:
      return ApiDealAgreementHistoryStateEnum.InitialConditions;
    default:
      throw new Error(`Enum value is not defined: DealAgreementHistoryStateEnum=${String(source)}`);
  }
}

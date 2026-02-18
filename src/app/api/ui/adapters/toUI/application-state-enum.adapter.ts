import { ApiApplicationStateEnum } from '../../../swagger/models/api-application-state-enum';
import { ApplicationStateEnum } from '../../enums/application-state.enum';

export function adaptApplicationStateEnumToUI(source?: ApiApplicationStateEnum | null): ApplicationStateEnum {
  switch (source) {
    case ApiApplicationStateEnum.Default:
      return ApplicationStateEnum.Default;
    case ApiApplicationStateEnum.Actual:
      return ApplicationStateEnum.Actual;
    case ApiApplicationStateEnum.Canceled:
      return ApplicationStateEnum.Canceled;
    case ApiApplicationStateEnum.Draft:
      return ApplicationStateEnum.Draft;
    case ApiApplicationStateEnum.Removed:
      return ApplicationStateEnum.Removed;
    case ApiApplicationStateEnum.CanceledByCustomerDuringDealSigning:
      return ApplicationStateEnum.CanceledByCustomerDuringDealSigning;
    case ApiApplicationStateEnum.CanceledBySupplierBeforeDealSigning:
      return ApplicationStateEnum.CanceledBySupplierBeforeDealSigning;
    case ApiApplicationStateEnum.SentToOperator:
      return ApplicationStateEnum.SentToOperator;
    case ApiApplicationStateEnum.Rejected:
      return ApplicationStateEnum.Rejected;
    case ApiApplicationStateEnum.CanceledBySupplierDuringDealSigning:
      return ApplicationStateEnum.CanceledBySupplierDuringDealSigning;
    default:
      throw new Error(`Enum value is not defined: ApiApplicationStateEnum=${String(source)}`);
  }
}

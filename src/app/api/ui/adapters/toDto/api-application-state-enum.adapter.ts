import { ApplicationStateEnum } from '../../enums/application-state.enum';
import { ApiApplicationStateEnum } from '../../../swagger/models/api-application-state-enum';

export function adaptApiApplicationStateEnum(source?: ApplicationStateEnum | null): ApiApplicationStateEnum {
  switch (source) {
    case ApplicationStateEnum.Default:
      return ApiApplicationStateEnum.Default;
    case ApplicationStateEnum.Actual:
      return ApiApplicationStateEnum.Actual;
    case ApplicationStateEnum.Canceled:
      return ApiApplicationStateEnum.Canceled;
    case ApplicationStateEnum.Draft:
      return ApiApplicationStateEnum.Draft;
    case ApplicationStateEnum.Removed:
      return ApiApplicationStateEnum.Removed;
    case ApplicationStateEnum.CanceledByCustomerDuringDealSigning:
      return ApiApplicationStateEnum.CanceledByCustomerDuringDealSigning;
    case ApplicationStateEnum.CanceledBySupplierBeforeDealSigning:
      return ApiApplicationStateEnum.CanceledBySupplierBeforeDealSigning;
    case ApplicationStateEnum.SentToOperator:
      return ApiApplicationStateEnum.SentToOperator;
    case ApplicationStateEnum.Rejected:
      return ApiApplicationStateEnum.Rejected;
    case ApplicationStateEnum.CanceledBySupplierDuringDealSigning:
      return ApiApplicationStateEnum.CanceledBySupplierDuringDealSigning;
    default:
      throw new Error(`Enum value is not defined: ApplicationStateEnum=${String(source)}`);
  }
}

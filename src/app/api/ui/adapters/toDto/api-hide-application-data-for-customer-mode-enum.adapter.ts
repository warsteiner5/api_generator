import { HideApplicationDataForCustomerModeEnum } from '../../enums/hide-application-data-for-customer-mode.enum';
import { ApiHideApplicationDataForCustomerModeEnum } from '../../../swagger/models/api-hide-application-data-for-customer-mode-enum';

export function adaptApiHideApplicationDataForCustomerModeEnum(source?: HideApplicationDataForCustomerModeEnum | null): ApiHideApplicationDataForCustomerModeEnum {
  switch (source) {
    case HideApplicationDataForCustomerModeEnum.DoNotHide:
      return ApiHideApplicationDataForCustomerModeEnum.DoNotHide;
    case HideApplicationDataForCustomerModeEnum.HideBeforeEndFilingApplications:
      return ApiHideApplicationDataForCustomerModeEnum.HideBeforeEndFilingApplications;
    case HideApplicationDataForCustomerModeEnum.HideForCertainMinutesBeforeEndFilingApplications:
      return ApiHideApplicationDataForCustomerModeEnum.HideForCertainMinutesBeforeEndFilingApplications;
    case HideApplicationDataForCustomerModeEnum.HideAlways:
      return ApiHideApplicationDataForCustomerModeEnum.HideAlways;
    default:
      throw new Error(`Enum value is not defined: HideApplicationDataForCustomerModeEnum=${String(source)}`);
  }
}

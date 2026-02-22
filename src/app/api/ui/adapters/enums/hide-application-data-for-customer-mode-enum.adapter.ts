import { ApiHideApplicationDataForCustomerModeEnum } from '../../../swagger/models/api-hide-application-data-for-customer-mode-enum';
import { HideApplicationDataForCustomerModeEnum } from '../../enums/hide-application-data-for-customer-mode.enum';

export const hideApplicationDataForCustomerModeEnumAdapter = (source?: ApiHideApplicationDataForCustomerModeEnum | null): HideApplicationDataForCustomerModeEnum => {
  switch (source) {
    case ApiHideApplicationDataForCustomerModeEnum.DoNotHide:
      return HideApplicationDataForCustomerModeEnum.DoNotHide;
    case ApiHideApplicationDataForCustomerModeEnum.HideBeforeEndFilingApplications:
      return HideApplicationDataForCustomerModeEnum.HideBeforeEndFilingApplications;
    case ApiHideApplicationDataForCustomerModeEnum.HideForCertainMinutesBeforeEndFilingApplications:
      return HideApplicationDataForCustomerModeEnum.HideForCertainMinutesBeforeEndFilingApplications;
    case ApiHideApplicationDataForCustomerModeEnum.HideAlways:
      return HideApplicationDataForCustomerModeEnum.HideAlways;
    default:
      throw new Error(`Enum value is not defined: ApiHideApplicationDataForCustomerModeEnum=${String(source)}`);
  }
}

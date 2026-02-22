import { ApiHideApplicationSettingsForCustomerDto } from '../../../swagger/models/api-hide-application-settings-for-customer-dto';
import { HideApplicationSettingsForCustomer } from '../../models/hide-application-settings-for-customer.interface';
import { hideApplicationDataForCustomerModeEnumAdapter } from '../enums/hide-application-data-for-customer-mode-enum.adapter';

export const hideApplicationSettingsForCustomerAdapter = (source?: ApiHideApplicationSettingsForCustomerDto | null): HideApplicationSettingsForCustomer => {
  return {
    hideApplicationDataForCustomerMode: source?.HideApplicationDataForCustomerMode === null ? undefined : hideApplicationDataForCustomerModeEnumAdapter(source?.HideApplicationDataForCustomerMode),
    hideForCertainMinutesBeforeEndFilingApplicationsForCustomer: source?.HideForCertainMinutesBeforeEndFilingApplicationsForCustomer,
  };
}

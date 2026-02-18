import { ApiHideApplicationSettingsForCustomerDto } from '../../../swagger/models/api-hide-application-settings-for-customer-dto';
import { HideApplicationSettingsForCustomer } from '../../models/hide-application-settings-for-customer.interface';
import { adaptHideApplicationDataForCustomerModeEnumToUI } from './hide-application-data-for-customer-mode-enum.adapter';

export function adaptHideApplicationSettingsForCustomerToUI(source?: ApiHideApplicationSettingsForCustomerDto | null): HideApplicationSettingsForCustomer {
  return {
    hideApplicationDataForCustomerMode: adaptHideApplicationDataForCustomerModeEnumToUI(source?.HideApplicationDataForCustomerMode),
    hideForCertainMinutesBeforeEndFilingApplicationsForCustomer: source?.HideForCertainMinutesBeforeEndFilingApplicationsForCustomer ?? 0,
  };
}

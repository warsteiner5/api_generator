import { HideApplicationSettingsForCustomer } from '../../models/hide-application-settings-for-customer.interface';
import { ApiHideApplicationSettingsForCustomerDto } from '../../../swagger/models/api-hide-application-settings-for-customer-dto';
import { apiHideApplicationDataForCustomerModeEnumAdapter } from '../enums/api-hide-application-data-for-customer-mode-enum.adapter';

export const apiHideApplicationSettingsForCustomerDtoAdapter = (source?: HideApplicationSettingsForCustomer | null): ApiHideApplicationSettingsForCustomerDto => {
  return {
    HideApplicationDataForCustomerMode: source?.hideApplicationDataForCustomerMode === null ? undefined : apiHideApplicationDataForCustomerModeEnumAdapter(source?.hideApplicationDataForCustomerMode),
    HideForCertainMinutesBeforeEndFilingApplicationsForCustomer: source?.hideForCertainMinutesBeforeEndFilingApplicationsForCustomer,
  };
}
